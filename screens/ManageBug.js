import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { addBug, removeBug, updateBug } from "../store/redux/bugs";
import BugForm from "../components/BugForm";
import { storeBug, deleteBug, editBug } from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ManageBug = ({ route, navigation }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const bugs = useSelector((state) => state.bugs.bugs);
  const authenticationToken = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const editedBugId = route.params?.bugId;
  const selectedBug = bugs.find((bug) => bug.id === editedBugId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedBugId ? "Edit Bug" : "Add Bug",
    });
  }, [navigation, editedBugId]);

  const handleDeletePress = async () => {
    setIsSubmitting(true);
    try {
      await deleteBug(editedBugId, authenticationToken);
      dispatch(removeBug({ id: editedBugId }));
      navigation.goBack();
    } catch (error) {
      setError('Could not delete bug - please try again later!');
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleSave = async (bug) => {
    setIsSubmitting(true);
    try {

      if (editedBugId) {
        await editBug(editedBugId, bug, authenticationToken);
        dispatch(updateBug({id: editedBugId, bug: bug}));
        navigation.goBack();
        return;
      }
      
      // save to firbase backend  
      const id = await storeBug(bug, authenticationToken);
      dispatch(addBug({ ...bug, id}));
      navigation.goBack();
      
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return <Loader/>;
  }

  if (error && !isSubmitting) {
    return <Error message={error} />;
  }

  return (
    <View style={styles.container}>
      <BugForm
        onSubmit={handleSave}
        onCancel={handleCancel}
        submitButtonLabel={editedBugId ? "Update" : "Add"}
        defalutValues={selectedBug}
      />
      {editedBugId && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            size={40}
            color={GlobalStyles.colors.error500}
            onPress={handleDeletePress}
          />
        </View>
      )}
    </View>
  );
};

export default ManageBug;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary450,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.white,
    alignItems: "center",
  },
});

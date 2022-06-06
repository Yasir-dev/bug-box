import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import BugList from "./BugList";
import BugsSummary from "./BugsSummary";


const Bugs = ({bugs, period, infoText}) => {
  let content = <Text style={styles.infoText}>{infoText}</Text>;

  if (bugs.length > 0) {
    content = <BugList bugs={bugs}/>;
  }
  return (
    <View style={styles.container}>
      <BugsSummary period={period} bugs={bugs}/>
      {content}
    </View>
  );
};

export default Bugs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary450,
  },
  infoText: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

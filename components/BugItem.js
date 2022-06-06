import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import { formatDate } from "../utils/date";
import { useNavigation } from "@react-navigation/native";

const BugItem = ({id, title, date, amount, developer}) => {

    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('ManageBug', { bugId: id});
    };

  return (
    <Pressable onPress={handlePress} style={({pressed}) => pressed ? styles.pressed : null}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{formatDate(date)}</Text>
          <Text style={styles.text}>{developer}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{`${amount.toFixed(2)} €`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BugItem;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        // shadow android
        elevation: 3,
        // shadow iOS
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1},
        shadowOpacity: 0.4
    },
    pressed: {
        opacity: 0.75,
    },
    text: {
        color: GlobalStyles.colors.white,
        width: 200,
    },
    title: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        backgroundColor: GlobalStyles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 100,// ask eldin
    },
    amount: {
        textAlign: 'center',
        width: 60, // ask eldin
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    }
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

const BugsSummary = ({ period, bugs }) => {
  const calculateSum = bugs.reduce((sum, bug) => {
    return sum + bug.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>{`${calculateSum.toFixed(2)} €`}</Text>
    </View>
  );
};

export default BugsSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    //justifyContent: 'space-between',
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.black,
  },
  sum: {
    marginLeft: "auto",
    width: 70, // ask eldin
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});

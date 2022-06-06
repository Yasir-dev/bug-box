import { StyleSheet, FlatList } from "react-native";
import React from "react";
import BugItem from "./BugItem";

const renderBugItem = (itemData) => {
  return <BugItem {...itemData.item}/>;
};

const BugList = ({ bugs }) => {
  return (
    <FlatList
      data={bugs}
      renderItem={renderBugItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default BugList;

const styles = StyleSheet.create({});

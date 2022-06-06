import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import { Picker } from "@react-native-picker/picker";

const ItemPicker = ({ items, onChange, label, defaultSelection }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        mode="dialog"
        themeVariant="dark"
        onValueChange={onChange}
        style={styles.picker}
        selectedValue={defaultSelection}
      >
        {items.map((item, index) => (
          <Picker.Item label={item} value={item} key={index}/>
        ))}
      </Picker>
    </View>
  );
};

export default ItemPicker;

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
      },
      label: {
        color: GlobalStyles.colors.white,
        fontSize: 16,
        marginBottom: 4,
      },
      picker: {
        color: GlobalStyles.colors.black,
        backgroundColor: GlobalStyles.colors.white,
        borderRadius: 6,
      },
});

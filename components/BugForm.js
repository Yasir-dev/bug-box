import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { GlobalStyles } from "../constants/styles";
import ItemPicker from "./ItemPicker";
import {
  ELDIN,
  GINU,
  GÜNNI,
  KONRAD,
  KRZ,
  NATALIE,
  RADEK,
  STANLY,
  YASIR,
} from "../constants/team";
import DateSelector from "./DateSelector";

const TEAM_MEMBERS = [
  GÜNNI,
  YASIR,
  ELDIN,
  GINU,
  KONRAD,
  RADEK,
  KRZ,
  NATALIE,
  STANLY,
];

const BugForm = ({ onCancel, onSubmit, submitButtonLabel, defalutValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defalutValues ? defalutValues?.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defalutValues
        ? defalutValues.date
        : new Date(),
        isValid: true,
    },
    title: {
      value: defalutValues ? defalutValues?.title : "",
      isValid: true,
    },
    developer: {
      value: defalutValues ? defalutValues?.developer : GÜNNI,
      isValid: true,
    },
  });

  const handleInputChange = (name, value) => {
    setInputs((currentInputs) => {
      return { ...currentInputs, [name]: { value, isValid: true } };
    });
  };

  const handleSubmit = () => {
    const bug = {
      amount: parseInt(inputs.amount.value),
      date: inputs.date.value,
      title: inputs.title.value,
      developer: inputs.developer.value,
    };

    const { amount, date, title } = bug;

    const isAmountValid = !isNaN(amount) && amount > 0;
    const isDateValued = date.toString() !== "Invalid Date";
    const isTitleValid = title.trim().length > 0;

    if (!isAmountValid || !isDateValued || !isTitleValid) {
      setInputs((currentInputs) => {
        return {
          date: { value: currentInputs.date.value, isValid: isDateValued },
          amount: { value: currentInputs.amount.value, isValid: isAmountValid },
          title: { value: currentInputs.title.value, isValid: isTitleValid },
          developer: { value: currentInputs.developer.value, isValid: isTitleValid },
        };
      });
      return;
    }

    onSubmit(bug);
  };

  const isFormInValid = inputs.amount.isValid && inputs.title.isValid;

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.title}>Bug Details:</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.inputRow}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (text) => handleInputChange('amount', text),
            value: inputs.amount.value,
          }}
          isValid={inputs.amount.isValid}
        />
      </View>

      <DateSelector
        label='Date'
        onChange={handleInputChange}
        defaultDate={inputs.date.value}
      />

      <ItemPicker
        items={TEAM_MEMBERS}
        onChange={(text) => handleInputChange('developer', text)}
        defaultSelection={inputs.developer.value}
        label="Caused By"
      />

      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentence",
          autoCorrect: false,
          onChangeText:(text) => handleInputChange('title', text),
          value: inputs.title.value,
        }}
        isValid={inputs.title.isValid}
      />
      {!isFormInValid && (
        <Text style={styles.errorText}>
          Invalid inputs - please recheck you entered value!{" "}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={handleSubmit} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </ScrollView>
  );
};

export default BugForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputRow: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

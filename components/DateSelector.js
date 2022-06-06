import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DatePicker from "@react-native-community/datetimepicker";
import { GlobalStyles } from "../constants/styles";
import IconButton from "./IconButton";
import { formatDate } from "../utils/date";

const DateSelector = ({ label, onChange, defaultDate }) => {
  const [showDate, setshowDate] = useState(false);

  const hndleChange = (event, date) => {
    setshowDate(false);
    onChange("date", date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.innerContaienr}>
        <IconButton
          name="calendar-check-o"
          size={40}
          color={GlobalStyles.colors.white}
          onPress={() => setshowDate(true)}
        />
        {showDate && (
          <DatePicker
            value={new Date()}
            mode="date"
            format="DD.MM.YYYY"
            onChange={hndleChange}
          />
        )}
        <Text style={styles.date}>{formatDate(defaultDate)}</Text>
      </View>
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  innerContaienr: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  label: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
  date: {
    color: GlobalStyles.colors.white,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
});

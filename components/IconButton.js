import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.pressed : null}>
      <View style={styles.container}>
        <FontAwesome name={name} size={size} color={color}/>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    }
});

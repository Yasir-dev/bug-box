import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'

const Input = ({label, style, textInputConfig, isValid}) => {
    const inputStyles = [styles.input];
    
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    if (!isValid) {
        inputStyles.push(styles.invalidInput);
    }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.white,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary50,
        color: GlobalStyles.colors.black,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: GlobalStyles.colors.white,
        fontSize: 16,
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error500,
    }
})
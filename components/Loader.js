import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'

const Loader = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator size="large" color={GlobalStyles.colors.white} />
  </View>
  )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary450,
      }
})
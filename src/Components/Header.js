import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.skyBlue,
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "ibmBold"
  }
})
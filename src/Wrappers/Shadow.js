import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Shadow = (style) => {
  return (
    <View style={[styles.container, style]}>
      <Text>Shadow</Text>
    </View>
  )
}

export default Shadow

const styles = StyleSheet.create({})
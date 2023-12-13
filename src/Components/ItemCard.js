import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.thumbnail }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.blue,
    marginTop: 10,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    color: colors.white,
    fontSize: 17,
    marginLeft: 12,
    fontFamily: "ibmRegular"
  },
  image: {
    height: 130,
    width: 130,
    marginLeft: 60
  }
})
import { StyleSheet, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ItemCard = ({ item, navigation, route }) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("Detail", { id: item.id })}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.thumbnail }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
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
    minHeight: 130,
    minWidth: 130,
    marginLeft: 60
  }
})
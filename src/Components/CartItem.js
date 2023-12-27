import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../Global/colors'

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>MODELO: {item.title}</Text>
        <Text style={styles.text}>CANTIDAD: {item.quantity}</Text>
        <Text style={styles.text}>PRECIO UNITARIO: ${item.price}</Text>
        <Text style={styles.precioTotal}>PRECIO TOTAL: ${item.price * item.quantity}</Text>
      </View>
    </View >
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderBlockColor: colors.black,
    backgroundColor: colors.black
  },
  textContainer: {},
  text: {
    color: colors.white,
    fontSize: 17,
    marginLeft: 12,
    fontFamily: "ibmRegular"
  },
  precioTotal: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 12,
    marginTop: 3,
    fontFamily: "ibmBold",
  },
  image: {
    minHeight: 100,
    minWidth: 130,
  }
})
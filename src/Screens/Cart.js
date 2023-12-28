import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import productsInCart from "../Data/cart.json"
import CartItem from '../Components/CartItem'
import { useState, useEffect } from 'react'
import { colors } from '../Global/colors'
import Counter from '../Components/Counter'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setCart(productsInCart)
  }, [])

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
    setTotal(total)
  }, [cart])

  return (
    <View style={styles.container}>
      <Counter />
      <FlatList data={productsInCart} keyExtractor={item => item.id} renderItem={({ item }) => <CartItem item={item} />} />
      <View style={styles.confirm}>
        <Text style={styles.text}>TOTAL: ${total} </Text>
        <Pressable>
          <Text style={styles.button}>CONFIRMAR</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 6,
  },
  button: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "ibmBold",
    padding: 10,
    backgroundColor: colors.emerald
  },
  text: {
    fontSize: 20,
    fontFamily: "ibmBold"
  }
})
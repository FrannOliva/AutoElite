import { StyleSheet, Text, View, FlatList } from 'react-native'
import productsInCart from "../Data/cart.json"
import CartItem from '../Components/CartItem'

const Cart = () => {
  return (
    <View>
      <FlatList data={productsInCart} keyExtractor={item => item.id} renderItem={({ item }) => <CartItem item={item} />} />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})
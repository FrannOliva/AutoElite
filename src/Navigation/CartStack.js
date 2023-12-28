import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Cart from '../Screens/Cart'

const CartStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={() => { return { header: () => <Header title="CARRITO" /> } }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Orders from '../Screens/Orders'

const OrderStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={() => { return { header: () => <Header title="ORDENES" /> } }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrderStack
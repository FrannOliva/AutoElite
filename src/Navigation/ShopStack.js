import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'

const ShopStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={({ route }) => {
      return {
        header: () => <Header title={route.name === "Home" ? "CATEGORÍAS" : route.name === "Categories" ? route.params.category.toUpperCase() : "DETALLE"} />
      }
    }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Categories' component={ItemListCategories} />
      <Stack.Screen name='Detail' component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack

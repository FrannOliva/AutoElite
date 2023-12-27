import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { colors } from "../Global/colors"
import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
        <Tab.Screen
          name="Shopping"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => <Entypo name="home" size={25} color={focused ? colors.blue : colors.black} />
          }} />
        <Tab.Screen
          name="Carrito"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => <FontAwesome name="shopping-cart" size={25} color={focused ? colors.blue : colors.black} />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: colors.black,
    borderTopWidth: 1,
    backgroundColor: colors.grey
  }
})


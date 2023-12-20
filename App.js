import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react'
import { colors } from './src/Global/colors'
import Home from './src/Screens/Home'
import ItemListCategories from './src/Screens/ItemListCategories'
import { useFonts } from 'expo-font'
import { fonts } from './src/Global/fonts'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const [categorySelected, setCategorySelected] = useState()
  const [fontLoaded] = useFonts(fonts)

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.skyBlue} />
      <SafeAreaView style={styles.container}>
        {categorySelected ? <ItemListCategories category={categorySelected} /> : <Home setCategorySelected={setCategorySelected} />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'flex-start',
    width: "100%"
  },
});

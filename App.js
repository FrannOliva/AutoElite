import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react'
import { colors } from './src/Global/colors'
import Home from './src/Screens/Home'
import ItemListCategories from './src/Screens/ItemListCategories';
import { useFonts } from 'expo-font';



export default function App() {
  const [categorySelected, setCategorySelected] = useState()
  const [fontLoaded] = useFonts({
    ibmRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    ibmBold: require("./assets/fonts/IBMPlexSans-Bold.ttf")
  })

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

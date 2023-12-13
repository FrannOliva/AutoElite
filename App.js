import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { colors } from './src/Global/colors'
import Home from './src/Screens/Home'
import ItemDetail from './src/Screens/ItemDetail';
import ItemListCategories from './src/Screens/ItemListCategories';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.skyBlue} />
      <SafeAreaView style={styles.container}>
        <ItemListCategories />
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

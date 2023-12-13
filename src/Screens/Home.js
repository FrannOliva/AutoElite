import { StyleSheet, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title="CATEGORÍAS" />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    fontFamily: "ibmRegular"
  }
})
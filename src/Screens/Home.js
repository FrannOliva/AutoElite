import { StyleSheet, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="CATEGORÍAS" />
      <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  }
})
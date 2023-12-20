import { StyleSheet, View } from 'react-native'
import Categories from '../Components/Categories'

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} route={route} />
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
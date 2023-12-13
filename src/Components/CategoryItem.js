import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../Global/colors'

const CategoryItem = ({ category }) => {
  return (
    <Pressable onPress={() => console.log(category)} style={styles.container}>
      <Text style={styles.text}>{category}</Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    margin: 3,
    padding: 10,
    width: 165,
    borderRadius: 6,
  },
  text: {
    color: colors.white,
    fontSize: 18
  }
})
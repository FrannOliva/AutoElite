import { StyleSheet, Pressable, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const ItemListCategories = () => {
  return (
    <>
      <Header title="PRODUCTOS" />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Buscar' placeholderTextColor={colors.black} />
        <View style={styles.botones}>
          <Pressable><Ionicons name="search" size={30} color={colors.black} /></Pressable>
          <Pressable><FontAwesome name="close" size={30} color={colors.black} /></Pressable>
        </View>
      </View>
    </>

  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: colors.skyBlue
  },
  input: {
    backgroundColor: colors.white,
    width: "74%",
    paddingLeft: 4,
    borderColor: colors.black,
    borderWidth: 2
  },
  botones: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 5
  }
})
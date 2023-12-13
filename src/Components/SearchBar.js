import { StyleSheet, Pressable, TextInput, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../Global/colors'
import { useState } from 'react'


const SearchBar = ({ setKeyword }) => {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  const search = () => {
    const expression = /.*[0-9].*/
    if (expression.test(input)) {
      setError("NO INGRESAR NÚMEROS POR FAVOR")
    } else {
      setKeyword(input)
    }

  }
  const removeItem = () => {
    setInput("")
    setError("")
  }
  return (
    <View style={styles.containerView}>
      <View style={styles.container}>
        <TextInput style={styles.input} value={input} onChangeText={(t) => setInput(t)} placeholder='Buscar' placeholderTextColor={colors.black} />
        <View style={styles.botones}>
          <Pressable onPress={search}><Ionicons name="search" size={30} color={colors.black} /></Pressable>
          <Pressable onPress={removeItem}><FontAwesome name="close" size={30} color={colors.black} /></Pressable>
        </View>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({
  containerView: {
    width: "100%",
  },
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
  },
  error: {
    backgroundColor: "red",
    color: colors.black,
    width: "100%",
    fontSize: 16,
  }
})
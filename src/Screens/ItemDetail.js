import { StyleSheet, Text, View } from 'react-native'

const ItemDetail = ({ route }) => {
  const { id } = route.params
  return (
    <View>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})
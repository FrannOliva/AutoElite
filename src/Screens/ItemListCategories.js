import { FlatList, StyleSheet } from 'react-native'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import productsArray from '../Data/products.json'
import ItemCard from '../Components/ItemCard'
import { useEffect, useState } from 'react'

const ItemListCategories = ({ navigation, route }) => {
  const { category } = route.params
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState(productsArray)

  useEffect(() => {
    if (category) {
      const productsCategory = productsArray.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    } else {
      const productsFiltered = productsArray.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  }, [keyword])

  return (
    <>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        style={styles.card}
        contentContainerStyle={{ alignSelf: "center" }}
        renderItem={({ item }) => <ItemCard item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  card: {
    width: "100%",
  }
})
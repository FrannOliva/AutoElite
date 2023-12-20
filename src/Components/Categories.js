import { FlatList, StyleSheet, } from 'react-native'
import categories from "../Data/categories.json"
import CategoryItem from './CategoryItem'

const Categories = ({ navigation, route }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} route={route} />}
      style={styles.container}
      numColumns={2}
    />
  )
}

export default Categories

const styles = StyleSheet.create({})
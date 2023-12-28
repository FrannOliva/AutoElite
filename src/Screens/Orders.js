import { FlatList, View } from 'react-native';
import orders from "../Data/orders.json"
import OrderItem from '../Components/OrderItem';
import Counter from '../Components/Counter';

const Orders = () => {

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  )
}

export default Orders


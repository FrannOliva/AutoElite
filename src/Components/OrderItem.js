import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const OrderItem = ({ order }) => {
  const total = order.items.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.text2}>Total: $ {total.toFixed(2)}</Text>
      </View>
      <EvilIcons name="close" size={24} color={colors.black} />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  textContainer: {
    marginLeft: 16,
  },
  text1: {
    fontSize: 16,
    fontFamily: 'ibmMono',
    color: colors.black,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'ibmMono',
    color: colors.black,
  },
});

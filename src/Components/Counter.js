import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'
import { colors } from '../Global/colors'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Button title="+1" onPress={() => dispatch(increment())} />
      <Text style={styles.count}>{count}</Text>
      <Button title="-1" onPress={() => dispatch(decrement())} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          keyboardType="numeric"
          onChangeText={(t) => setAmount(parseInt(t) || 0)}
        />
        <Button title="Agregar" onPress={() => dispatch(incrementByAmount(amount))} />
      </View>
    </View>
  )
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15,
    gap: 15,
  },
  count: {
    fontSize: 24,
    fontFamily: "ibmMono"
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    padding: 6,
    width: 80,
    textAlign: 'center',
  }
})
import { StatusBar } from 'react-native'
import { colors } from './src/Global/colors'
import { useFonts } from 'expo-font'
import { fonts } from './src/Global/fonts'
import Navigator from './src/Navigation/Navigator'
import { store } from './src/App/store'
import { Provider } from 'react-redux'

export default function App() {
  const [fontLoaded] = useFonts(fonts)
  if (!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.skyBlue} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  )
}
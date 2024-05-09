import { SafeAreaView, Text } from "react-native"
// import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
// import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen copy"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

export const App = () => {
  return (
    <PaperProvider 
      settings={{
        icon: (props) => <MaterialIcon {...props} />,
      }}
    >
      <SafeAreaView style={{ flex:1 }}>
        {/* <HelloWorldScreen name='Daniel Rosas' /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  )
}

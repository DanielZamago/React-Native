import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles"
import { FAB } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialIcons"

export const CounterM3Screen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>

            <FAB
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                style={globalStyles.fab}
                icon="add-circle"
            />
        </View>
    )
}
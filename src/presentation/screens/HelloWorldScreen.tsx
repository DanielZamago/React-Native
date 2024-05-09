import { StyleSheet, Text, View } from "react-native"

interface Props {
    name?: string
}

export const HelloWorldScreen = ({name = "Mundo"}: Props) => {
  return (
    <View style={ styles.container }>
        <Text numberOfLines={1} ellipsizeMode='middle' style={ styles.title }>Hola, {name}!!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        fontSize: 50,
        textAlign: 'center',
        color: 'Black',
        padding: 20
    }
})
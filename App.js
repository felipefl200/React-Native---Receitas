import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela inicial</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {   
    fontSize: 24,
    

  }
})

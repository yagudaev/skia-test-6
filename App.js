import { Box, Canvas, Circle } from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Canvas style={{ flex: 1 }}>
        {/* <Box
          color="lightblue"
          box={{ width: 100, height: 100, x: 0, y: 0 }}
          style="stroke"
        /> */}
        <Circle cx={100} cy={100} r={128} color="lightblue" />
      </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

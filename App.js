import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableHighlight} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "./components/Main";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        
         <Logo />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});

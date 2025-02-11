import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image  source={require('./assets/lookym.png')} 
      style={{ 
        width: 305, 
        height: 159,
        }} />
      
      <Text style={{color: 'white'}}>Welcome to Lookym! </Text>
       <Text>
        <h1>Lookym</h1></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

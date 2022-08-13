import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CarItem from './components/CarItem';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

        <CarItem name='Model S' subtext ="Starting at $800" image="./assets/images/ModelS.jpeg"/>
        <StatusBar style="auto" />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

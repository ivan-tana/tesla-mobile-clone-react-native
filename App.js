import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

 
        <CarsList />

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

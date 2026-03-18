import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextScreen from './src/screens/text-input';
import { useState } from 'react';
import { ListaDeTarefas } from './src/components/lista-de-tarefas';

export default function App() {

  const [text, setText] = useState('');

  const onEnter = () => {

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextScreen onEnter={onEnter} text={text} setText={setText} />
        <StatusBar style="auto" />
        <ListaDeTarefas />
      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

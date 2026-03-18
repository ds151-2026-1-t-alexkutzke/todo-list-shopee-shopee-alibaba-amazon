import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextScreen from './src/screens/text-input';
import { useState } from 'react';
import { ListaDeTarefas, Tarefa } from './src/components/lista-de-tarefas';

export default function App() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  const addTarefa = () => {
    const novaTarefa: Tarefa = {
      texto: "i",
      id: Date.now().toString() + Math.random().toString(), // Geração de ID único
    };
    setTarefas(oldTarefas => [...oldTarefas, novaTarefa]);
  }

  const [text, setText] = useState('');

  const onEnter = () => {
    addTarefa();
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextScreen onEnter={onEnter} text={text} setText={setText} />
        <StatusBar style="auto" />
        <ListaDeTarefas novaTarefa={text} setTarefas={setTarefas} tarefas={tarefas} />
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

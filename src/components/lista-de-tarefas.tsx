import { useState } from "react"
import { FlatList, View } from "react-native";

interface Tarefa {
  texto: string;
}

const ListaDeTarefas = () => {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  const addTarefa = () => {
    const novaTarefa: Tarefa = {
      texto: "i"
    };
    setTarefas(oldTarefas => [...oldTarefas, novaTarefa]);
  }

  return (
    <View>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.texto}
        renderItem={({ item }) =>
          <View>texto</View>
        }
      />
    </View>
  )
}

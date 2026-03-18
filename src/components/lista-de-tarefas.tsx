import { useState } from "react"
import { View } from "react-native";

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

    </View>
  )
}

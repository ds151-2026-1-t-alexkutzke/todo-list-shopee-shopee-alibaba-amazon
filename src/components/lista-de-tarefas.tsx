import { useState } from "react"
import { FlatList, Text, View } from "react-native";

export interface Tarefa {
  texto: string;
  id: string;
}

interface ListaDeTarefasProps {
  novaTarefa: string;
  setTarefas: (tarefas: Tarefa[]) => any;
  tarefas: Tarefa[];
}




export const ListaDeTarefas = ({ novaTarefa, setTarefas, tarefas }: ListaDeTarefasProps) => {



  return (
    <View>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View><Text>texto</Text></View>
        }
      />
    </View>
  )
}

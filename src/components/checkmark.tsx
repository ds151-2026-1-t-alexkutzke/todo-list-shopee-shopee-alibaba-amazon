
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';



interface CheckmarkProps {
    id:number,
    state: boolean,
    onCheckmarkClick: (id:number) => void,
}

const Checkmark = ({id,state,onCheckmarkClick}: CheckmarkProps) =>{
    const mark = state ? "checkmark-circle" : "checkmark-circle-outline";
    return(
        <View>
            <Ionicons name={mark} size={24} color="green" onPress={() => onCheckmarkClick(id)} /> 
        </View>
    )
}
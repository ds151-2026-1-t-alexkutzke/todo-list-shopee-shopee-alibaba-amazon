import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface TextScreenProps {
  onEnter: ()=> void
}

const TextScreen = ({onEnter}:TextScreenProps) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite aqui"
        onChangeText={setText}
        onEndEditing={() => onEnter()}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  }
});

export default TextScreen;
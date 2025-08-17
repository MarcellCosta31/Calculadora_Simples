import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat(primeiro);
  const y = parseFloat(segundo);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput 
      keyboardType='decimal-pad'
      style={styles.input} 
      value={primeiro} 
      onChangeText={setPrimeiro}/>

      <Text style={styles.soma}>+</Text>

      <TextInput
      keyboardType='decimal-pad'
      style={styles.input}  
      value={segundo} 
      onChangeText={setSegundo}/>

      <Text style={styles.subtitle}>Resultado:</Text>
      <Text style={styles.resultado}>Soma: {x + y}</Text>
      <Text style={styles.resultado}>Subtração: {x - y}</Text>
      <Text style={styles.resultado}>Multiplicação: {x * y}</Text>
      <Text style={styles.resultado}>Divisão: {x / y}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '100',
  },
  input: {
    textAlign: "center",
    alignSelf: "stretch",
    marginHorizontal: 36,
    height: 50,
    backgroundColor: "#DDD",
    marginTop: 20,
    fontSize: 28,
    fontWeight: '100'
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  resultado: {
    fontSize: 30,

  },
  soma: {
    fontSize: 30,
  }
});

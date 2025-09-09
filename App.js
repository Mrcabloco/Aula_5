import{SafeAreaView, Text, View}from 'react-native';

import mascara from './css/estilo';

export default function App(){
  return(
    <SafeAreaView style={mascara.fundo}>
    <Text style={mascara.titulo}>
      Aula 5
    </Text>
        <View style={mascara.cx1}></View>
        <Text style={mascara.titulo2}>SUZANO</Text>
        <View style={mascara.cx2}></View>
        <Text> Usando o github na aula do Professor Anselmo </Text>
    </SafeAreaView>
  );
}
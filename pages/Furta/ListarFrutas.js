import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {buscarTodasFrutas} from './Modelfrutas';




export default function ListarFrutas({navigation}) {

  const [dadosFrutas, setdadosFrutas] = useState([]);
  
  useEffect(async ()=> {
    const resp = await buscarTodasFrutas();
    setdadosFrutas(resp);
  },[]);

  return (
    <View style={styles.container}>
         
        <Text style={styles.titulo}>Lista de Frutas</Text>

<TouchableOpacity style={styles.btncadf}>

    <Text style= {styles.TxtFrutaGO} onPress={()=> navigation.navigate('Cadastrar')}>Cadastrar Frutas</Text>

</TouchableOpacity>

          <FlatList
          data={dadosFrutas}
          keyExtractor={dadosFrutas => dadosFrutas.uid}
          renderItem={({ item })=>

        <View>
          <TouchableOpacity onPress={()=> navigation.navigate('Alterar')}>
            <View style={styles.botaoFrutas} >
            <Text style={styles.txtBotao} >{item.uid}</Text>
            <Text style={styles.txtFruta}>{item.fruta}</Text>
            <Text style={styles.txtValor}>{item.valor}</Text>
            </View>
          </TouchableOpacity>

        </View>
        }
          />
     
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:25,
    backgroundColor:'#447814',
    padding:5,
    color:'white',
    borderRadius:10,
    marginBottom:10,
  },
  TxtFrutaGO:{
    fontSize:20,
    marginBottom:10,
    backgroundColor:'#317FFF',
    padding:5,
    color:'white',
    borderRadius:10,
  },
  txtBotao:{
    
  },
  txtFruta:{
    
  },
  txtValor:{
    
  },
  botaoFrutas:{
    backgroundColor:'#FF8431',
    padding:5,
    borderRadius:10,
    width:100,
    marginBottom:10,
  }
});
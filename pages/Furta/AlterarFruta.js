import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native-web";
import { alterarFruta, deletarFruta } from './Modelfrutas';

export default function AlterarFruta({navigation}) {
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function alterar() {
        const resultado = await alterarFruta(idp, frutap, valorp, fotop);

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta alterada com sucesso!!");
            navigation.goBack();
        } else {
            Alert.alert('Erro ao alterar fruta');
        }
    }

    async function deletar(){
        const resultado = await deletarFruta(idp, frutap, valorp, fotop);

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta deletadas com sucesso!!");
        } else {
            Alert.alert('Erro ao deletar fruta');
        }
    }
    
    return(
        <View style={styles.container}>
            
            <TextInput
                value={idp}
                placeholder="digite o uid fruta"
                style={styles.textInput}
                onChangeText={setIdp}
            />
            <TextInput
                value={frutap}
                placeholder="digite o nome da fruta"
                style={styles.textInput}
                onChangeText={setFrutap}
            />
            <TextInput
                value={valorp}
                placeholder="digite o valor da fruta"
                style={styles.textInput}
                onChangeText={setValorp}
            />
            <TextInput
                value={fotop}
                placeholder="coloque o caminho da fruta"
                style={styles.textInput}
                onChangeText={setFotop}
            />
            <TouchableOpacity style={styles.btnAteraFruta} onPress={alterar}>
                <Text style ={styles.txtBottonAlt}>Alterar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnDeletartFruta} onPress={deletar}>
                <Text style ={styles.txtBottonDel}>Excluir</Text>
            </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9c46a',
        
    },
    caixa:{
        
        width:'50%',
        fontSize:25,
        backgroundColor:'#60944EEB',
        padding:5,
        color:'white',
        borderRadius:10,
        marginBottom:10,
        textAlign:'center',
    },
    textInput:{
        textAlign:'center',
    }
})


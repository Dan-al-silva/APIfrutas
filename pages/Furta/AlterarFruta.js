import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native-web";

import { alterarFruta, deletarFruta } from './Modelfrutas';

export default function AlterarFruta({navigation}) {
    const [uid, setuid] = useState('');
    const [fruta, setfruta] = useState('');
    const [valor, setvalor] = useState('');
    const [foto, setfoto] = useState('');

    async function alterar() {
        const resultado = await alterarFruta(uid, fruta, valor, foto);

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta alterada com sucesso!!");
            navigation.goBack();
        } else {
            Alert.alert('Erro ao alterar fruta');
        }
    }

    async function deletar(){
        const resultado = await deletarFruta(uid);

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta deletadas com sucesso!!");
        } else {
            Alert.alert('Erro ao deletar fruta');
        }
    }
    
    return(
        <View style={styles.container}>

            <TextInput
                value={uid}
                placehilder="digite o uid fruta"
                style={styles.textInput}
                onChangeText={setuid}
            />
            <TextInput
                value={fruta}
                placehilder="digite o nome da fruta"
                style={styles.textInput}
                onChangeText={setfruta}
            />
            <TextInput
                value={valor}
                placehilder="digite o valor da fruta"
                style={styles.textInput}
                onChangeText={setvalor}
            />
            <TextInput
                value={foto}
                placehilder="coloque o caminho da fruta"
                style={styles.textInput}
                onChangeText={setfoto}
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
    }
})


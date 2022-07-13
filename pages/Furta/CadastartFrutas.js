import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native";
import { salvarNovaFruta } from './Modelfrutas';


export default function CadastarFruta() {
    const [uid, setuid] = useState('');
    const [fruta, setfruta] = useState('');
    const [valor, setvalor] = useState('');
    const [foto, setfoto] = useState('');

    async function cadastro() {
        const resultado = await salvarNovaFruta(uid, fruta, valor, foto)

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta cadastrata com sucesso!!");
        } else {
            Alert.alert('Erro ao cadastrar fruta');
        }
    }

    return(
        <View style={styles.container}>

            <TextInput
                value={uid}
                placeholder="digite o uid fruta"
                style={styles.textInput}
                onChangeText={setuid}
            />
            <TextInput
                value={fruta}
                placeholder="digite o nome da fruta"
                style={styles.textInput}
                onChangeText={setfruta}
            />
            <TextInput
                value={valor}
                placeholder="digite o valor da fruta"
                style={styles.textInput}
                onChangeText={setvalor}
            />
            <TextInput
                value={foto}
                placeholder="coloque o caminho da fruta"
                style={styles.textInput}
                onChangeText={setfoto}
            />
            <TouchableOpacity style={styles.btnCadastartFruta} onPress={cadastro}>
                <Text style ={styles.txtBottonCad}>Cadastar</Text>
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


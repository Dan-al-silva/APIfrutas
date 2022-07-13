import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native";
import { salvarNovaFruta } from './Modelfrutas';


export default function CadastarFruta({navigation}) {
    const [uidp, setUidp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function cadastro() {
        const resultado = await salvarNovaFruta(uidp, frutap, valorp, fotop)

        if (resultado == 'Sucesso') {
            Alert.alert("Fruta cadastrata com sucesso!!");
        } else {
            Alert.alert('Erro ao cadastrar fruta');
            navigation.goBack();
        }
    }

    return(
        <View style={styles.container}>

            <TextInput
                value={uidp}
                placeholder="digite o uid fruta"
                style={styles.textInput}
                onChangeText={setUidp}
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


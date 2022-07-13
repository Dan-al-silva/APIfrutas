import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native-web";
import { alterarFruta, deletarFruta } from './Modelfrutas';

export default function AlterarFruta({navigation}) {
    const [uidp, setUidp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function alterar() {
        const resultado = await alterarFruta(uidp, frutap, valorp, fotop);

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
                onChangeText={setUidp}
            />
            <TextInput
                value={fruta}
                placehilder="digite o nome da fruta"
                style={styles.textInput}
                onChangeText={setFrutap}
            />
            <TextInput
                value={valor}
                placehilder="digite o valor da fruta"
                style={styles.textInput}
                onChangeText={setValorp}
            />
            <TextInput
                value={foto}
                placehilder="coloque o caminho da fruta"
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
    }
})


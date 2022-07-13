import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const navBotao = createStackNavigator();

import ListarFrutas from './Furta/ListarFrutas';
import CadastrarFruta from './Furta/CadastartFrutas';
import AlterarFruta from './Furta/AlterarFruta';


export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={ListarFrutas}options={{headerShow:false}}/>
            <navBotao.Screen name="Cadastrar" component={CadastrarFruta}options={{headerShow:false}}/>
            <navBotao.Screen name="Alterar" component={AlterarFruta}options={{headerShow:false}}/>
        </navBotao.Navigator>
    )
}



import * as React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from './Home.js';
import Pesquisa from "./Pesquisa.js";
import RotasBotao from "./Rotasbotao";

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator intialRouteName="Home" screenOptions={{headerShown:false}}>

<Tab.Screen
    
    name="Pesquisa"
    component={Pesquisa}
    options ={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="magnify" 
        color={color} seze={size} />}}/>
    <Tab.Screen
    
    name="Home"
    component={Home}
    options ={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="basket-fill" 
        color={color} seze={size} />}}/>

<Tab.Screen
    
    name="Frutas"
    component={RotasBotao}
    options ={{
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="fruit-watermelon" 
        color={color} seze={size} />}}/>
    </Tab.Navigator>
  );
}

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <ImageBackground  style={styles.backgroundImage} source={require('../assets/gifhome.gif')}>
        </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex:1,
     width:300,
  },
});
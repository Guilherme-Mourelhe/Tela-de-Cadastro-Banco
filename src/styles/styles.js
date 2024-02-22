import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
    },
    
    input: {
      borderWidth: 1,
      borderColor: 'black',
      height: 44,
      width: 360,
      fontSize: 20,
      margin: 15,
      padding: 10,
      borderRadius: 15,
      alignItems: 'center'
    },

    sexo: {
      width: 360,
      margin: 10,
      alignItems: 'center'
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      margin: 5,
      textAlign: 'center',
      marginTop: 10
    },

    menu: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'orange',
      margin: 10,
      textAlign: 'center'
    },
    
    textL: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      margin: 5,
      textAlign: 'center',
      color: 'green',
    },

    textButton: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      margin: 5,
      textAlign: 'center',
      marginTop: 10,
      color: 'white'
    },

    button: {
      borderWidth: 2,
      borderColor: 'orange',
      width: 150,
      height: 50,
      margin: 15,
      borderRadius: 20,
      backgroundColor: 'orange',
    }

});

export default styles;
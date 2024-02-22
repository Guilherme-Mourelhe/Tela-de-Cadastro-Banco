import React, {Component} from 'react';
import {View, Text, TextInput, Switch, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import styles from './src/styles/styles';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexoOpt: 0,
      sexos: [
        {key: 0, nome: "Selecione"},
        {key: 1, nome: "Masculino"},
        {key: 2, nome: "Feminino"}
      ],
      limite: 0,
      estudante: false,
      valida: 0
    };
    this.validaConta = this.validaConta.bind(this);
  }

  validaConta(){

    if(this.state.nome === '' || this.state.idade === 0 || this.state.sexoOpt === 0 || this.state.limite === 0){
      return Alert.alert('Preencha todos os dados para continuar com o cadastro!');

    }else {
      
      Alert.alert(
        `Conta criada com sucesso! Nome: ${this.state.nome} idade: ${this.state.idade} sexo: ${this.state.sexos[this.state.sexoOpt].nome} limite: ${this.state.limite}`
      );
        
      
      this.setState({ valida: 1})
    }
  }

  
  render(){
    let sexoItens = this.state.sexos.map((v,k)=> { return <Picker.Item key = {k} value = {k} label = {v.nome}/> })
    return(

      <View style = {styles.container}> 

          <Text style = {styles.menu}> BANCO COD </Text>

          <TextInput
          style = {styles.input}
          placeholder ='Nome:'
          onChangeText = {(nomeUsuario)=> this.setState({nome: nomeUsuario})}
          />

          <TextInput
          style = {styles.input}
          placeholder ='Idade:'
          onChangeText = {(idadeUsuario)=> this.setState({idade: idadeUsuario})}
          keyboardType='numeric'
          />    

          <Text style = {styles.text}> Informe o seu sexo: </Text>


          <Picker
          style = {styles.sexo}
          selectedValue={this.state.sexoOpt}
          onValueChange={(itemValue, itemIndex)=> this.setState({sexoOpt: itemValue})}>
          
            {sexoItens}

          </Picker>


          <Text style = {styles.text}> Qual o limite desejado?  </Text>

          <Slider
          minimumValue={0}
          maximumValue={100000}
          value = {this.state.limite}
          onValueChange={(novoLimite)=> this.setState({limite: novoLimite})}
          minimumTrackTintColor='green'
          maximumTrackTintColor='red'
          />

          <Text style = {styles.textL}> R$ {this.state.limite.toFixed(2)} </Text>

          <View style = {{flexDirection: 'row', justifyContent: 'center', margin: 10}}>

          <Text style = {styles.text}> Sou estudante  </Text>
          <Switch
          value = {this.state.estudante}
          onValueChange={(optEstudante)=> this.setState({estudante: optEstudante})}
          />

          </View>

          <View style = {{alignItems: 'center', marginTop: 30}}>

          <TouchableOpacity style = {styles.button} onPress={this.validaConta}>
            <Text style = {styles.textButton}> Abrir Conta </Text>
          </TouchableOpacity>
         

          </View>
      </View>
    );
  }
}


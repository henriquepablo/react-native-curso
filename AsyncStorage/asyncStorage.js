import { Component, useState } from "react";
import { View, TextInput, Button, Switch, Alert, Text, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: 'Lacerda'
     };
     
     this.gravarNome = this.gravarNome.bind(this);
  }

  gravarNome() {
    this.setState({
      nome: this.state.input
    });
  }

  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value})
    });
  }

  async componentDidUpdate(_,prevState) {
    const nome = this.state.nome;

    if (prevState != nome) await AsyncStorage.setItem('nome', nome);
  }

  render() {

    return (
      <View >

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput 
            style={{borderWidth: 1, borderColor: '#000', width: 350}}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
          />

          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={{backgroundColor: '#000', color: '#fff', height: 40, padding: 10, marginLeft: 4}} >+</Text>
          </TouchableOpacity>

        </View>

          <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>
            {this.state.nome}
          </Text>
  
      </View>
    );
  }
}

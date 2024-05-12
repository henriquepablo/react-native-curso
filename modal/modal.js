import { Component, useState } from "react";
import { View, TextInput, Button, Switch, Alert, Text, TouchableOpacity, Modal } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({modalVisible: true});
  }

  sair() {
    this.setState({modalVisible: false})
  }

  render() {

    return (

      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        
        <Button title="Entrar" onPress={ this.entrar }/>
        
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor: '#292929', flex: 1}}>
            <Text style={{color: '#fff', fontSize: 28}}>
              Seja Bem Vindo
            </Text>
            <Button title="Sair" onPress={ () => this.sair() } />
          </View>
        </Modal>

      </View>
    );
  }
}

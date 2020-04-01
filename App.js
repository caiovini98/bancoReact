import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableOpacity,
ScrollView, FlatList, Picker, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexoSelecionado: 0,
      sexos: [
        {key: 1, sexo: 'Masculino'},
        {key: 2, sexo: 'Feminino'}
      ],
      valorSlider: 0,
      status: false
    }
    this.entrar = this.entrar.bind(this);
  }

    entrar() {
      if (this.state.nome == '' || this.state.idade == '') {
        alert('Por favor, informe uma idade ou nome valido')
      } else if (this.state.valorSlider == 0) {
        alert('Por favor, informe um valor limite')
      }
      else {
      alert(
        'Nome: '+this.state.nome + '\n'+
        'Idade: '+this.state.idade + '\n'+
        'Sexo: '+ this.state.sexos[this.state.sexoSelecionado].sexo + '\n'+
        'Valor limite: '+this.state.valorSlider.toFixed(2) + '\n' +
        'Estudante: '+ ((this.state.status) ? 'Sim' : 'Não')
      )}
    }

  render() {
    let sexoSelected = this.state.sexos.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.sexo}/>
    });
    return(
      
      <View style = {styles.container}>
        <Text style = {styles.header}>Banco React</Text>

        <Text style = {styles.textos}>Informe seu nome abaixo: </Text>
        <TextInput
        placeholder = 'Nome'
        underlineColorAndroid="transparent"
        style = {styles.input} 
        onChangeText =  {(texto) => this.setState({nome: texto})}
        />
        <Text style = {styles.textos}>Informe sua idade abaixo: </Text>
        <TextInput 
        placeholder = 'Idade'
        keyboardType = 'numeric'
        underlineColorAndroid="transparent"
        style = {styles.input} 
        onChangeText = {(texto) => this.setState({idade: texto})}
        />

        <View style={styles.areaSexo}>  
        <Text style = {styles.textoNome}>Sexo: </Text>
        <Picker style={styles.pickerSexo} 
        selectedValue = {this.state.sexoSelecionado} 
        onValueChange = {(itemValue, itemIndex) => this.setState({sexoSelecionado: itemValue})}
        >
            {sexoSelected}
        </Picker>
        </View>

        <Text style = {styles.textos}>Limite: </Text>
        <Slider 
        value = {this.state.valorSlider}
        minimumValue = {0}
        maximumValue = {500}
        onValueChange = { (valorSelecionado)=> this.setState({valorSlider: valorSelecionado})}/>
        <Text style = {styles.textSlider}>{this.state.valorSlider.toFixed(2)}</Text>

        <Text style = {styles.textos}>Estudante?</Text>
        <Switch 
        value = {this.state.status}
        onValueChange = { (valorSwitch)=> this.setState({status: valorSwitch})}
        />

        <TouchableOpacity style = {styles.btn} onPress = {this.entrar}>
         
            <Text style = {styles.btnText}>ENTRAR</Text>
         
        </TouchableOpacity>

        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#DDD'
  },
  textos: {
    margin: 5,
    marginTop: 15,
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#222',
    marginLeft: 10, marginRight: 10,
    fontSize: 20,
    padding: 10,
  },
  textSlider: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    height: 40,
    marginLeft: 120, marginRight: 120, marginTop: 20,
    borderRadius: 9, backgroundColor:'#DDD',
  }, 
  btnText: {
    fontSize: 20,
    padding: 10
  },
  textoNome:{
    fontSize: 20,
    marginLeft: 5,
  },
  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerSexo:{
   flex:1
 },
})

export default App;
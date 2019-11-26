/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  componentDidMount,

} from 'react-native';

import Post from './src/components/Post.js';

const width = Dimensions.get('screen').width;


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
    .catch(error => console.warn('Error = ' + error))
  }
  
  render(){
    
    return (
      <FlatList
      keyExtractor={item => item.id}
      data={this.state.fotos}
      renderItem={({item}) =>  <Post fotos={item}/>  }
      />
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    
  })
  
  export default App;
  
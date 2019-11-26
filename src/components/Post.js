import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    render() {
        
        return (
            <View>
            <View  style={styles.cabecarioUsuario}>
            <Image style={styles.fotoPerfil} source={{uri: this.props.foto.urlPerfil}} />
            <Text>{this.props.fotos.usuario}</Text>
            </View>
            <Image style={styles.imagemDoPost} source={require('../../resources/img/alura.jpg')}  />
            </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        cabecarioUsuario: {
            flexDirection: 'row', alignItems: 'center'
        },
        
        fotoPerfil: {
            width: 40, height: 40, borderRadius: 20, margin: 10
        },
        
        imagemDoPost: {
            width: width, height: width
        }
    })
    
    
    
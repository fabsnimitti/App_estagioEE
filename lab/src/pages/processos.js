import React, { useState, useEffect } from 'react';
import { Text, Alert, TouchableOpacity, TextInput, View, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';
import estoqueIma from "../images/estoque.png"
export default function cadastro({ navigation }) {

    const [process, setProcess] = useState(null);


    async function cadastrar() {
       
            const response = await api.post('/api/cadastro', {
                processo:process
            });
            if(response.data.message=='user criado'){
            Alert.alert(
                "Alerta",
                "Usuário criado",
                [
                    
                    { text: "OK" }
                ],
                { cancelable: false }
            );
            }
            if(response.data.message=="user existente"){
                Alert.alert(
                    "Alerta",
                    "Usuário Existente",
                    [
                        
                        { text: "OK" }
                    ],
                    { cancelable: false }
                );
                }
        


    }

    return (<View style={styles.background}>
        <View style={styles.imageview}>
            <Image
                style={styles.stretch}
                source={require('../images/logo.jpg')}
            />
        </View>

        <View style={styles.viewinput}>
          
            


            <View style={{ marginTop: 10 }}>
                <TextInput

                    style={styles.input}
                    placeholder="Faça sua solicitação, pedido de produção ou concerto"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={text => setProcess(text)}
                />

                <View style={styles.btns}>
                    <TouchableOpacity onPress={cadastrar} style={styles.btnlogin}>
                        <Text>Enviar Solicitação</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>



    </View>

    )
}

const styles = StyleSheet.create({
    imageview: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50

    },
    background: {
        flex: 1,
        backgroundColor: '#fff'
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
       height:150,



    },
    viewinput: {
        flex: 1,
        marginHorizontal: 10



    },
    btns: {
        marginTop: 20,



    },
    btnlogin: {
        marginTop: 20,
        height: 45,
        backgroundColor: "#D98719",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 10,


    }

});
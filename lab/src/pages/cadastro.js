import React, { useState, useEffect } from 'react';
import { Text, Alert, TouchableOpacity, TextInput, View, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';
import estoqueIma from "../images/estoque.png"
export default function cadastro({ navigation }) {

    const [email, setEmail] = useState(null);
    const [re_email, setRe_Email] = useState(null);
    const [password, setPswd] = useState(null);
    const [re_password, setRe_Pswd] = useState(null);

    async function cadastrar() {


        if (email != re_email) {

        }
        if (password != password) {

        }
        if ((password == re_password) && (email == re_email)) {
            const response = await api.post('/api/cadastro', {
                email: email,
                password: password
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


    }

    return (<View style={styles.background}>
        <View style={styles.imageview}>
            <Image
                style={styles.stretch}
                source={require('../images/logo.jpg')}
            />
        </View>

        <View style={styles.viewinput}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Cadastre um E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirme o E-mail."
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setRe_Email(text)}
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <TextInput

                    style={styles.input}
                    placeholder="Cadastre uma Senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={text => setRe_Pswd(text)}
                />


            </View>


            <View style={{ marginTop: 10 }}>
                <TextInput

                    style={styles.input}
                    placeholder="Confirme a Senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={text => setPswd(text)}
                />

                <View style={styles.btns}>
                    <TouchableOpacity onPress={cadastrar} style={styles.btnlogin}>
                        <Text>Cadastrar</Text>
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
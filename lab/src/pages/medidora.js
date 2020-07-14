import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, StyleSheet, PanResponder } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';
import mediIma from "../images/medidora.png"


export default function estoque({ navigation }) {
    const [statusMedidora, setStatusMedidora] = useState();
    const [statusRobo, setStatusRobo] = useState();
   
    useEffect(() => {
        async function getData() {
            const response = await api.post('/api/getDataLinha');

           

            if (response.data.statusMedidora.statusMedidora == 1) {
                setStatusMedidora("Funcionando")
            }
            else {
                setStatusMedidora("Com problemas")
            }
            if (response.data.statusMedidora.statusRobo == 1) {
                setStatusRobo("Funcionando")
            }
            else {
                setStatusRobo("Com problemas")
            }


        }
        getData();


    }, [])
    return (

        <View style={styles.fundo}>
            <View >
                <Image style={styles.soldaIma} source={mediIma} ></Image>
            </View>
            <View>
                <View style={styles.linehair}></View>
                <Text>Status do Robo: {statusRobo}</Text>
                <Text>Status da medidora: {statusMedidora}</Text>
              
            </View>


        </View>

    )




}

const styles = StyleSheet.create({
   soldaIma: {


        marginTop: 50,
        marginLeft: 150,

    },
    fundo: {
        flex: 1,


        backgroundColor: "#fff",

    },
    linehair: {
        height: 1,
        width: 400,
        backgroundColor: '#000',


    },
})
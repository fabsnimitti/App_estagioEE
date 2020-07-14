import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, StyleSheet, PanResponder } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';
import FresaIma from "../images/fresa.png"


export default function estoque({ navigation }) {
    const [statusfresa, setStatusfresa] = useState();
    const [statusRobo, setStatusRobo] = useState();
   
    useEffect(() => {
        async function getData() {
            const response = await api.post('/api/getDataLinha');

           

            if (response.data.statusFresa.statusFresa == 1) {
                setStatusfresa("Funcionando")
            }
            else {
                setStatusfresa("Com problemas")
            }

            if (response.data.statusFresa.statusRobo == 1) {
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
                <Image style={styles.soldaIma} source={FresaIma} ></Image>
            </View>
            <View>
                <View style={styles.linehair}></View>



                <Text>Status do Robo: {statusRobo}</Text>
                <Text>Status da fresa: {statusfresa}</Text>
              
            </View>


        </View>

    )




}

const styles = StyleSheet.create({
   soldaIma: {


        marginTop: 50,
        marginLeft: 125,

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
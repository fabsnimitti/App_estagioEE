import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, StyleSheet, PanResponder } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';
import estoqueIma from "../images/estoque.png"


export default function estoque({ navigation }) {
    const [statusEstoque, setStatusEstoque] = useState();
    const [statusRoboEstoque, setStatusRoboEstoque] = useState();
    const [unidadesEstoque, setunidadesEstoque] = useState();
    useEffect(() => {
        async function getData() {
            const response = await api.post('/api/getDataLinha');

            setunidadesEstoque(response.data.unidadesEstoque.unidadesEstoque)

            if (response.data.statusEstoque.statusEstoque == 1) {
                setStatusEstoque("Funcionando")
            }
            else {
                setStatusEstoque("Com problemas")
            }
            if (response.data.statusRoboEstoque.statusRoboEstoque == 1) {
                setStatusRoboEstoque("Funcionando")
            }
            else {
                setStatusRoboEstoque("Com problemas")
            }


        }
        getData();


    }, [])
    return (

        <View style={styles.fundo}>
            <View >
                <Image style={styles.estoqueIma} source={estoqueIma} ></Image>
            </View>
            <View>
                <View style={styles.linehair}></View>



                <Text>Status do Robo: {statusRoboEstoque}</Text>
                <Text>Status do Estoque: {statusEstoque}</Text>
                <Text>Número de peças em estoque: {unidadesEstoque}</Text>
            </View>


        </View>

    )




}

const styles = StyleSheet.create({
    estoqueIma: {


        marginTop: 25,
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
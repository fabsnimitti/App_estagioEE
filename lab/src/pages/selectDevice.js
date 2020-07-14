import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, View, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';


import api from '../services/api';
import tudo from '../images/tudo.png'
import alert from '../images/alert.png'
import alert_ok from '../images/alert_ok.png'
import refresh from '../images/atualizar.png'

export default function selectDevice({ navigation }) {
    const [statusEstoque, setstatusestoque] = useState(alert_ok);
    const [statusRoboEstoque, setstatusRoboEstoque] = useState(alert_ok);
    const [statusControleQualidade, setstatusControleQualidade] = useState(alert_ok);
    const [att, setAtt] = useState(true);
    const [statusCLP, setCLP] = useState(alert_ok);
    const [statusRoboLaiser, setRoboLaiser] = useState(alert_ok);
    const [statusImpressoraLaiser, setImpressoraLaiser] = useState(alert_ok);
    const [statusRoboMedidora, setRoboMedidora] = useState(alert_ok);
    const [statusMedidora, setMedidora] = useState(alert_ok);
    const [statusRoboSolda, setRoboSolda] = useState(alert_ok);
    const [statusCasaSolda, setCasaSolda] = useState(alert_ok);
    const [statusTorno, setTorno] = useState(alert_ok);
    const [statusRoboTorno, setRoboTorno] = useState(alert_ok);
    const [statusRoboFresa, setRoboFresa] = useState(alert_ok);
    const [statusFresa, setFresa] = useState(alert_ok);

    useEffect(() => {
        async function getData() {
            const response = await api.post('/api/getDataLinha');
            console.log(response.data.statusEstoque.statusEstoque)
            if (response.data.statusEstoque.statusEstoque == 0) {
                setstatusestoque(alert)
            }
            if (response.data.statusEstoque.statusEstoque == 1) {
                setstatusestoque(alert_ok)
            }
            if (response.data.statusRoboEstoque.statusRoboEstoque == 0) {
                setstatusRoboEstoque(alert)
            }
            if (response.data.statusRoboEstoque.statusRoboEstoque == 1) {
                setstatusRoboEstoque(alert_ok)
            }
            if (response.data.statusControleQualidade.statusControleQualidade == 0) {
                setstatusControleQualidade(alert)
            }
            if (response.data.statusControleQualidade.statusControleQualidade == 1) {
                setstatusControleQualidade(alert_ok)
            }
            if (response.data.statusClp.statusClp == 0) {
                setCLP(alert)
            }
            if (response.data.statusClp.statusClp == 1) {
                setCLP(alert_ok)
            }
            if (response.data.statusLaiser.statusRoboLaiser == 0) {
                setRoboLaiser(alert)
            }
            if (response.data.statusLaiser.statusRoboLaiser == 1) {
                setRoboLaiser(alert_ok)
            }
            if (response.data.statusLaiser.statusImpressora == 0) {
                setImpressoraLaiser(alert)
            }
            if (response.data.statusLaiser.statusImpressora == 1) {
                setImpressoraLaiser(alert_ok)
            }
            if (response.data.statusMedidora.statusRobo == 0) {
                setRoboMedidora(alert)
            }
            if (response.data.statusMedidora.statusRobo == 1) {
                setRoboMedidora(alert_ok)
            }
            if (response.data.statusMedidora.statusMedidora == 0) {
                setMedidora(alert)
            }
            if (response.data.statusMedidora.statusMedidora == 1) {
                setMedidora(alert_ok)
            }
            if (response.data.statusSolda.statusRobo == 0) {
                setRoboSolda(alert)
            }
            if (response.data.statusSolda.statusRobo == 1) {
                setRoboSolda(alert_ok)
            }
            if (response.data.statusSolda.statusCasa == 0) {
                setCasaSolda(alert)
            }
            if (response.data.statusSolda.statusCasa == 1) {
                setCasaSolda(alert_ok)
            }
            if (response.data.statusTorno.statusRobo == 0) {
                setRoboTorno(alert)
            }
            if (response.data.statusTorno.statusRobo == 1) {
                setRoboTorno(alert_ok)
            }
            if (response.data.statusTorno.statusTorno == 0) {
                setTorno(alert)
            }
            if (response.data.statusTorno.statusTorno == 1) {
                setTorno(alert_ok)
            }
            if (response.data.statusFresa.statusRobo == 0) {
                setRoboFresa(alert)
            }
            if (response.data.statusFresa.statusRobo == 1) {
                setRoboFresa(alert_ok)
            }
            if (response.data.statusFresa.statusFresa == 0) {
                setFresa(alert)
            }
            if (response.data.statusFresa.statusFresa == 1) {
                setFresa(alert_ok)
            }
        }
        getData();
    }, [att]);

    function clickEstoque() {
        navigation.navigate('estoque');
    }
    function clickSolda() {
        navigation.navigate('solda');
    }
    function clickTorno() {
        navigation.navigate('torno');
    }
    function clickFresa() {
        navigation.navigate('fresa');
    }
    function clickMedidora() {
        navigation.navigate('medidora');
    }
    function clickLaiser() {
        navigation.navigate('cortadora');
    }
    function clickProcesso() {
        navigation.navigate('operacoes');
    }
    function refreshFunc() {
        setAtt(!att)
    }

    return (


        <View style={styles.container}>
            <ImageBackground source={tudo} style={styles.image}
                resizeMode="stretch"
            >
                <View>
                    <Image style={styles.statusEstoque} source={statusEstoque} ></Image>
                    <Image style={styles.statusRoboEstoque} source={statusRoboEstoque} ></Image>
                    <Image style={styles.statusControleQualidade} source={statusControleQualidade} ></Image>
                    <Image style={styles.statusCLP} source={statusCLP} ></Image>
                    <Image style={styles.impressoraLaiser} source={statusImpressoraLaiser} ></Image>
                    <Image style={styles.roboLaiser} source={statusRoboLaiser} ></Image>
                    <Image style={styles.roboMedi} source={statusRoboMedidora} ></Image>
                    <Image style={styles.medidora} source={statusMedidora} ></Image>
                    <Image style={styles.roboSolda} source={statusRoboSolda} ></Image>
                    <Image style={styles.casaSolda} source={statusCasaSolda} ></Image>
                    <Image style={styles.roboTorno} source={statusRoboTorno} ></Image>
                    <Image style={styles.torno} source={statusTorno} ></Image>
                    <Image style={styles.roboFresa} source={statusRoboFresa} ></Image>
                    <Image style={styles.fresa} source={statusFresa} ></Image>

                    <TouchableOpacity style={styles.refreshbtn} onPress={refreshFunc} >
                        <ImageBackground source={refresh} style={styles.refreshIma} />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.btnEstoque} onPress={clickEstoque} />
                    <TouchableOpacity style={styles.btnSolda} onPress={clickSolda} />
                    <TouchableOpacity style={styles.btnTorno} onPress={clickTorno} />
                    <TouchableOpacity style={styles.btnFresa} onPress={clickFresa} />
                    <TouchableOpacity style={styles.btnMedidora} onPress={clickMedidora} />
                    <TouchableOpacity style={styles.btnLaiser} onPress={clickLaiser} />
                    <TouchableOpacity style={styles.btnProblema} onPress={clickProcesso} >
                        <Text>Solicitar Processo</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    btnEstoque: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 555,
        left: 140,

        alignItems: 'center',
        justifyContent: "center",
    },
    statusEstoque: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 560,
        left: 240,
    },
    statusRoboEstoque: {
        width: 30,
        height: 30,
        top: 590,
        left: 240,
        position: 'absolute',
    },
    statusControleQualidade: {
        width: 30,
        height: 30,
        top: 480,
        left: 20,
        position: 'absolute',
    },
    refreshbtn: {
        width: 30,
        height: 30,
        top: 5,
        left: 10,
        position: 'absolute',
    },
    refreshIma: {
        width: 30,
        height: 30,
    },
    statusCLP: {
        width: 30,
        height: 30,
        top: 320,
        left: 65,
        position: 'absolute',
    },
    impressoraLaiser: {
        width: 30,
        height: 30,
        top: 180,
        left: 15,
        position: 'absolute',
    },
    roboLaiser: {
        width: 30,
        height: 30,
        top: 210,
        left: 15,
        position: 'absolute',
    },
    roboMedi: {
        width: 30,
        height: 30,
        top: 15,
        left: 270,
        position: 'absolute',
    },
    medidora: {
        width: 30,
        height: 30,
        top: 45,
        left: 270,
        position: 'absolute',
    },
    roboSolda: {
        width: 30,
        height: 30,
        top: 130,
        left: 300,
        position: 'absolute',
    },
    casaSolda: {
        width: 30,
        height: 30,
        top: 130,
        left: 330,
        position: 'absolute',
    },
    roboTorno: {
        width: 30,
        height: 30,
        top: 235,
        left: 300,
        position: 'absolute',
    },
    torno: {
        width: 30,
        height: 30,
        top: 235,
        left: 330,
        position: 'absolute',
    },
    roboFresa: {
        width: 30,
        height: 30,
        top: 355,
        left: 300,
        position: 'absolute',
    },
    fresa: {
        width: 30,
        height: 30,
        top: 355,
        left: 330,
        position: 'absolute',
    },
    btnSolda: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 140,
        left: 285,

        alignItems: 'center',
        justifyContent: "center",
    },
    btnTorno: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 260,
        left: 285,

        alignItems: 'center',
        justifyContent: "center",

    },

    btnFresa: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 380,
        left: 285,

        alignItems: 'center',
        justifyContent: "center",

    },
    btnMedidora: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 0,
        left: 160,

        alignItems: 'center',
        justifyContent: "center",

    },
    btnLaiser: {
        position: 'absolute',
        height: 90,
        width: 90,
        top: 140,
        left: 10,

        alignItems: 'center',
        justifyContent: "center",

    },
    btnProblema: {
        position: 'absolute',
        height: 50,
        width: 120,
        top: 600,
        left: 270,
        backgroundColor: "#D98719",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
    },

});

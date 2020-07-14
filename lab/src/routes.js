import { createAppContainer } from 'react-navigation' // importação para criar os containers
import { createStackNavigator } from 'react-navigation-stack'// importação para criar as pilhas de nevegação


import Login from './pages/login';
import selectDevice from './pages/selectDevice';
import estoque from './pages/estoque';
import cadastro from './pages/cadastro';
import solda from './pages/solda';
import torno from './pages/torno';
import fresa from './pages/fresa';
import medidora from './pages/medidora';
import cortadora from './pages/cortadora';
import operacoes from './pages/processos';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                headerTransparent: true,
                title:'',
            },
            
        },

        selectDevice: {
            screen: selectDevice,
            navigationOptions: {
                headerTransparent: false,
                title:'Planta',
                headerTitleAlign:'center',
                 headerLeft: null
            },
            
        },
        estoque: {
            screen: estoque,
            navigationOptions: {
                headerTransparent: false,
                title:'Estoque',
                headerTitleAlign:'center',
            },
            
        },
        cadastro: {
            screen: cadastro,
            navigationOptions: {
                headerTransparent: true,
                title:'',
                headerTitleAlign:'center',
            },
            
        },
        solda: {
            screen: solda,
            navigationOptions: {
                headerTransparent: true,
                title:'Estação de solda',
                headerTitleAlign:'center',
            },
            
        },
        torno: {
            screen: torno,
            navigationOptions: {
                headerTransparent: true,
                title:'Estação de Torno',
                headerTitleAlign:'center',
            },
            
        },
        fresa: {
            screen: fresa,
            navigationOptions: {
                headerTransparent: true,
                title:'Estação de Fresa',
                headerTitleAlign:'center',
            },
            
        },

        medidora: {
            screen: medidora,
            navigationOptions: {
                headerTransparent: true,
                title:'Estação da Medidora',
                headerTitleAlign:'center',
            },
            
        },
        cortadora: {
            screen: cortadora,
            navigationOptions: {
                headerTransparent: true,
                title:'Estação da Cortadora a Laiser',
                headerTitleAlign:'center',
            },
            
        },
        operacoes: {
            screen: operacoes,
            navigationOptions: {
                headerTransparent: true,
                title:'Solicitar operação',
                headerTitleAlign:'center',
            },
            
        },
    
    
    
    
    
    




        
    }

    )



);

export default Routes;
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import api from '../services/api';



export default function login({ navigation }) {
   const [email, setEmail] = useState(null);
   const [password, setPswd] = useState(null);

   async function clickBtnLogin() {
      const response = await api.post('/api/login', {
         email: email,
         password: password
      });
      console.log(response.data.message)
    
      if (response.data.message == 'loginAutorizado') {
         navigation.navigate('selectDevice');

      }

   }
   function goToCadastro(){

      navigation.navigate('cadastro');
   }

   return (
      <View style={styles.background}>
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
                  placeholder="E-mail cadastrado."
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
                  placeholder="Senha"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={text => setPswd(text)}
               />
               <View style={styles.btns}>
                  <TouchableOpacity onPress={clickBtnLogin} style={styles.btnlogin}>
                     <Text>Entrar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={goToCadastro} style={styles.btnlogin}>
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
      marginTop: 80

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
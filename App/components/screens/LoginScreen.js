import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import AsyncStorage from 'react-native-async-storage/async-storage';
import CacheStore from 'react-native-cache-store';
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Axios from "axios";
const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [myemail,setMyEmail]=useState("");
  const [pass,setPass]=useState("");
  const [mycar,setMyCar]=useState("");
  const [loginStatus,setLoginStatus]=useState("")
  const handleChange=()=>{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(myemail)
    // console.log(pass)
    if(re.test(myemail)===true && pass && mycar){

    CacheStore.set('user', mycar, 50);
    let res=Axios.post("http://192.168.1.45:3001/applogin", {
      myemail: myemail,
   
      pass: pass,
      mycar:mycar
    })
    .then((response) => {
     
      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else{
     
        setLoginStatus(response.data[0].cust_name)
        CacheStore.set('key', response.data[0].cust_car, 50);
        navigation.navigate("Home")
      }
      setMyEmail("")
      setMyCar("")
      setPass("")
  
  
    })
      .catch(function (error) {
        console.log("Problem with login " + error.message);
      });
  
    }
    else{
      alert("Wrong input")
    }
     
  
   }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232b32" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Back</Text>
        <Text style={styles.text_subheader}>Sign in to continue</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
      <Text
      style={[
        styles.text_footer,
        {
          color: colors.text,
        },
      ]}
    >
      E-mail Address
    </Text>
    <View style={styles.action}>
      <FontAwesome name="user" color={colors.text} size={20} />
      <TextInput
        placeholder="Your Email Address"
        placeholderTextColor="#666666"
        onChangeText={newText => setMyEmail(newText)}
    defaultValue={myemail}
        style={[
          styles.textInput,
          {
            color: colors.text,
          },
        ]}
        autoCapitalize="none"
      />
    </View>
 
    <Text
    style={[
      styles.text_footer,
      {
        color: colors.text,
        marginTop: 15,
      },
    ]}
  >
    Car Number
  </Text>
  <View style={styles.action}>
    <FontAwesome name="car" color={colors.text} size={20} />
    <TextInput
      placeholder="Your Car Number"
      placeholderTextColor="#666666"
      onChangeText={newText => setMyCar(newText)}
  defaultValue={mycar}
      style={[
        styles.textInput,
        {
          color: colors.text,
        },
      ]}
      autoCapitalize="none"
    />
  </View>
    <Text
    style={[
      styles.text_footer,
      {
        color: colors.text,
        marginTop: 15,
      },
    ]}
  >
    Password
  </Text>
  <View style={styles.action}>
    <Feather name="key" color={colors.text} size={20} />
    <TextInput
      placeholder="Your Password"
      placeholderTextColor="#666666"
      secureTextEntry={ true }
      onChangeText={newText => setPass(newText)}
      defaultValue={pass}
      style={[
        styles.textInput,
        {
          color: colors.text,
        },
      ]}
      autoCapitalize="none"
      //   onChangeText={(val) => handlePasswordChange(val)}
    />
    </View>
        <View style={{ height: 50 ,marginTop:20}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleChange}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#232b32" }}>
              Sign In
            </Text>
          </TouchableOpacity>

         
        </View>

        <View style={{ height: 50 ,marginTop:5}}>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => navigation.replace("Register")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

         
        </View>
      </Animatable.View>
      {/* <TouchableOpacity onPress={navigation.navigate('Home')}><Text>ok</Text></TouchableOpacity> */}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232b32",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
 
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_subheader: {
    color: "#11b690",
    fontWeight: "bold",
    fontSize: 17,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    // paddingBottom: 5,
    marginBottom: 0,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    // paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#11b690",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    flex: 1,
    height: 50,
    borderRadius: 5,
   
    backgroundColor: "#232b32",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#232b32",
    borderWidth: 2,
  },
});

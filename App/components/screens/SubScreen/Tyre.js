import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable,SafeAreaView,Dimensions,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Card } from 'react-native-paper';
const { width, height } = Dimensions.get("window");

 const Smoke=()=>{

const navigation=useNavigation();
    return(
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'white'}}>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.container3}>
            <Text style={{ color: "white", fontWeight: "700" }}>
              Intelligent Car Expert
            </Text>
          </View>
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
          Exhaust Smoke
          </Text>
          <Text style={{ fontWeight: "100", marginTop: 10 }}>
          Unusual smoke from your car’s tailpipe isn’t good news and different colours of smoke depict a different story.
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700",color:'#232b32' }}>
          Black Smoke:
          </Text>
          <Text style={{ fontWeight: "100", marginTop: 10 }}>
          This means that excessive fuel is being burnt in the combustion chambers due to a leak in the fuel injector, a stuck fuel pressure regulator or a restriction in the fuel combustion pipe. This usually happens with relatively older cars and in such situations, it is very crucial to get the leaks checked from a specialised mechanic.
          </Text>

          <Text style={{  fontSize: 20, fontWeight: "700",color:'#232b32' }}>
          Blue Smoke:
          </Text>
          <Text style={{ fontWeight: "100", marginTop: 10 }}>
          Blue smoke indicates that there is a leakage in the valve seals or guides or the piston rings have worn out, which are causing the engine oil to penetrate into the combustion chamber which is causing the oil to burn along with the fuel. Hence Causing Blue Smoke
          </Text>

          <Text style={{  fontSize: 20, fontWeight: "700",color:'#232b32' }}>
          White or Grey Smoke:
          </Text>
          <Text style={{ fontWeight: "100", marginTop: 10 }}>
         White smoke indicates that the coolant is being combusted along with the fuel and there is a leakage somewhere in the Engine block, cylinder head and head gasket.
          </Text>
        </View>
          <View style={styles.container2 }>
            <TouchableOpacity
              style={styles.square}
             
            >
             
            <Text style={{  fontSize: 15, fontWeight: "700",color:'#232b32' }}>
            Black
            </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.square}
            
            >
           
            <Text style={{  fontSize: 15, fontWeight: "700",color:'#232b32' }}>
            Blue
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.square}
            
            >
              
            <Text style={{  fontSize: 15, fontWeight: "700",color:'#232b32' }}>
            White/Grey
            </Text>
            </TouchableOpacity>
          </View>
          
          </ScrollView>
          </SafeAreaView>
    );
}
export default Smoke;

const styles = StyleSheet.create({
    container3: {
      // flex:1,
      // marginTop:10,
      height: 35,
      backgroundColor: "#232b32",
      color: "white",
      fontWeight: "700",
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "white",
      borderBottomWidth: 0.25,
    },
  
  
    container: {
      // flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    inputContainer: {
      width: "80%",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "flex-end",
  backgroundColor: "white",
      // border:'10px solid red'
    },
    button: {
     backgroundColor: "white",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
  
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#232b32",
      borderWidth: 2,
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    buttonOutlineText: {
      color: "#232b32",
      fontWeight: "700",
      fontSize: 16,
    },
    container2: {
      // flex:1 ,
      // backgroundColor:'red',
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "white",
    },
    square: {
      backgroundColor: "white",
      width: 90,
      height: 90,
      margin: 8,
      borderRadius: 5,
      shadowColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
    square1: {
      backgroundColor: "white",
      width: 90,
      height: 90,
      margin: 8,
      borderRadius: 5,
      shadowColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
  });
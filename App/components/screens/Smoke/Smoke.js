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
       
          </SafeAreaView>
    );
}
export default Smoke;

const styles = StyleSheet.create({
    
  });
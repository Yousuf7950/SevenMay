import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable,Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
// import { useNavigation } from "@react-navigation/core";

const {width, height} = Dimensions.get('window');

const SettingScreen=()=>{
    const navigation = useNavigation();

 
    return(
        <ScrollView>
        <View style={styles.header}>
            <Text style={{color:'white',fontWeight:'700'}}>Settings</Text>
            
        </View>
        <View style={{padding:10}}>
        <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>Account Settings</Text>
        <Text style={{color:"#11b690",fontSize:15,fontWeight:"bold"}}>Information that reflects you</Text>
        </View>
        
        <View style={styles.cot}>
        <View style={[styles.item1,{flex:2,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
        <FontAwesome name="user-circle" size={25} color={"#232b32"}></FontAwesome>
            </View>
            <View style={[styles.item1,{flex:17,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
                <Text style={{fontSize:18}}>Account information</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity style={[styles.item1,{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingRight:5}]}><FontAwesome name="arrow-right" size={25} color={"#11b690"}></FontAwesome></TouchableOpacity>
        </View>

        <View style={styles.cot}>
        <View style={[styles.item1,{flex:2,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
        <FontAwesome name="car" size={25} color={"#232b32"}></FontAwesome>
            </View>
            <View style={[styles.item1,{flex:17,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
                <Text style={{fontSize:18}}>Update Car Information</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity style={[styles.item1,{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingRight:5}]}><FontAwesome name="arrow-right" size={25} color={"#11b690"}></FontAwesome></TouchableOpacity>
        </View>

        <View style={styles.cot}>
        <View style={[styles.item1,{flex:2,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
        <FontAwesome name="money" size={25} color={"#232b32"}></FontAwesome>
            </View>
            <View style={[styles.item1,{flex:17,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
                <Text style={{fontSize:18}}>Payment Records</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity style={[styles.item1,{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingRight:5}]}><FontAwesome name="arrow-right" size={25} color={"#11b690"}></FontAwesome></TouchableOpacity>
        </View>
        
        <View style={styles.cot}>
        <View style={[styles.item1,{flex:2,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
        <FontAwesome name="phone" size={25} color={"#232b32"}></FontAwesome>
            </View>
            <View style={[styles.item1,{flex:17,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
                <Text style={{fontSize:18}}>Contact Us</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity style={[styles.item1,{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingRight:5}]}><FontAwesome name="arrow-right" size={25} color={"#11b690"}></FontAwesome></TouchableOpacity>
        </View>
 
        <TouchableOpacity style={styles.cot} onPress={()=>navigation.navigate("Login")}
>
        <View style={[styles.item1,{flex:2,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
        <FontAwesome name="phone" size={25} color={"#232b32"} ></FontAwesome>
            </View>
            <View style={[styles.item1,{flex:17,justifyContent:'center',alignItems:'flex-start',paddingLeft:10}]}>
                <Text style={{fontSize:18}}>Logout</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity style={[styles.item1,{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingRight:5}]}><FontAwesome name="arrow-right" size={25} color={"#11b690"}></FontAwesome></TouchableOpacity>
        </TouchableOpacity>
    </ScrollView>
    );
}
export default SettingScreen;

const styles=StyleSheet.create({
    header:{
        // flex:1,
       // marginTop:10,
        height:35,
    backgroundColor:'#232b32',
    color:'white',
    fontWeight:'700',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.25,
    marginBottom:5
    
    },
    cot:{
        marginBottom:5,
        height:50,
        flexDirection:'row'
    },
    item1:{
        backgroundColor:'white'
    }
   
   
})
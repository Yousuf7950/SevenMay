import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable,Dimensions} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
const { width, height } = Dimensions.get("window");

const RecordScreen=()=>{
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
    return(
        <ScrollView>
            <View style={styles.header}>
                <Text style={{color:'white',fontWeight:'700'}}>Intelligent Car Expert</Text>
                
            </View>

            <View style={styles.main}>
             
              <Text style={{fontWeight:'bold',color: 'white', fontSize: 30,padding:20}} >What Services do you need ?</Text>
              <View style={{marginLeft:25,marginRight:25}}>
              <Searchbar
              
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              
            />
            </View>
            </View>


        </ScrollView>
    );
}
export default RecordScreen;

const styles=StyleSheet.create({
  main: {
    width: width,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height:height/3,
    backgroundColor: "#232b32", 

  },
  
    header:{
     
        height:40,
    backgroundColor:'#232b32',
    color:'white',
    fontWeight:'700',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor: 'white',
  
    
    },
})
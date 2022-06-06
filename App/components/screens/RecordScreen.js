import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  Dimensions,
} from "react-native";
import { DataTable } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import CacheStore from "react-native-cache-store";
import Axios from "axios";
const { width, height } = Dimensions.get("window");
let credit = 0;
const RecordScreen = () => {
  const [bundle, setBundle] = useState([]);
  const [cust, setCust] = useState("");
  const [allRecords, setAllRecords] = useState([]);
  const [cacheData, setCacheData] = useState("");
  useEffect(() => {
    getRecord();
    console.log("ok");
  }, [cacheData]);
  const getRecord = () => {
    return Axios.get("http://192.168.1.45:3001/recordUser")
      .then((res) => {
        res.data;

        setAllRecords(res.data);
        // setSlotOptions(res.data)
      })
      .catch((err) => console.log(err));
  };
  CacheStore.get("key").then((value) => {
    // alert(value)
    setCacheData(value);
  });
  console.log(cacheData)
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={{ color: "white", fontWeight: "700" }}>
          Intelligent Car Expert
        </Text>
      </View>

      <View style={styles.main}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 30,
            padding: 20,
          }}
        >
          Record History
        </Text>
        <Text style={styles.text_subheader}>View what have avail </Text>
        <View style={{ marginLeft: 25, marginRight: 25 }}></View>
      </View>
      <View style={{padding:10}}>
      <DataTable style={{marginTop:20}}>
        <DataTable.Header style={{backgroundColor:'#11b690'}}>
        
          <DataTable.Title><Text style={{fontWeight:'bold',color:'#232b32'}}>Car Number</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontWeight:'bold',color:'#232b32'}}>Date of service</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontWeight:'bold',color:'#232b32'}}>Status</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontWeight:'bold',color:'#232b32'}}>Total Cash</Text></DataTable.Title>
        </DataTable.Header>
        </DataTable>
        </View>
      {allRecords.map((x) => {
        const { rec_id, custcar, custdate, totalCash ,status} = x;
        console.log(custcar)
        return (
          
          <View key={rec_id}>
            {custcar === cacheData ? (
              <View>
              <DataTable.Row>
          
          <DataTable.Cell>{custcar}</DataTable.Cell>
          <DataTable.Cell>{custdate}</DataTable.Cell>
          <DataTable.Cell>{status}</DataTable.Cell>
          <DataTable.Cell >{totalCash}</DataTable.Cell>
        </DataTable.Row>
              </View>
            ) : null}
          </View>
        );
      })}
    </ScrollView>
  );
};
export default RecordScreen;

const styles = StyleSheet.create({
  main: {
    width: width,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: height / 4,
    backgroundColor: "#232b32",
  },

  header: {
    height: 40,
    backgroundColor: "#232b32",
    color: "white",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
  },
  text_subheader: {
    color: "#11b690",
    fontWeight: "bold",
    fontSize: 17,
    paddingLeft: 20,
    paddingBottom: 10,
  },
});

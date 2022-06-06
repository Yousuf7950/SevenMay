import React, { useState, useEffect } from "react";
// below link for pics in app 
// https://www.google.com/search?q=troubleshoot%20wallpaper%20vector%20green&tbm=isch&tbs=rimg:CWjigddw-fsdYSsLGrIsLk2m8AEAsgIMCgIIABAAOgQIABAA&hl=en&sa=X&ved=0CBsQuIIBahcKEwjAmfmz0fH3AhUAAAAAHQAAAAAQBg&biw=1044&bih=1075#imgrc=PHvwjqz34jCDMM
// below link for fontawesome
// https://fontawesome.com/v4/icons/
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import {

  PieChart,

} from 'react-native-chart-kit';
import CacheStore from "react-native-cache-store";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../screens/Category";
import { Row } from "react-bootstrap";
import Axios  from "axios";
import { Searchbar } from 'react-native-paper';
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [auth, setAuth] = useState("");
  const [dateData,setDateData]=useState("")
  const [dat,setDat]=useState("")
  const [cur,setCur]=useState("")
  const navigation = useNavigation();
  CacheStore.get("key").then((value) => {
    // console.log("asds")
    // console.log(value)
    setAuth(value);
  });
  

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
      <SafeAreaView style={styles.topHead}>
        <Text style={{ color: "white", fontWeight: "700" }}>
          Intelligent Car Expert {auth}
        </Text>
      </SafeAreaView>

      <View style={styles.mainBox}>
        <View style={styles.sub1}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Appointment")}
          >
            <FontAwesome
              name="calendar"
              size={30}
              color={"#11b690"}
            ></FontAwesome>
            <Text>Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Trouble")}
          >
            <FontAwesome name="sitemap" size={30} color={"#11b690"}></FontAwesome>
            <Text>Troubleshoot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Mechanic")}
          >
            <FontAwesome
              name="map-marker"
              size={30}
              color={"#11b690"}
            ></FontAwesome>
            <Text>Mechanic</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sub2}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Service")}
          >
            <FontAwesome
              name="handshake-o"
              size={30}
              color={"#11b690"}
            ></FontAwesome>
            <Text>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Record")}
          >
            <FontAwesome
              name="list-alt"
              size={30}
              color={"#11b690"}
            ></FontAwesome>
            <Text>Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate("Setting")}
          >
            <FontAwesome name="cog" size={30} color={"#11b690"}></FontAwesome>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      <View>     
      <PieChart
        data={[
          {
            name: 'Today Appointment',
            population: 35,
            color: '#11b690',
            legendFontColor: '#11b690',
          
            legendFontSize: 15,
          },
          {
            name: 'Active',
            population: 45,
            color: '#414b57',
            legendFontColor: '#414b57',
            legendFontSize: 15,
          },
          {
            name: 'Others',
            population: 25,
            color: '#232b32',
            legendFontColor: '#232b32',
            legendFontSize: 15,
          },
       
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />



    </View>


      <View style={styles.bigBox}>
        <View style={styles.bigBoxSub}>
         
          <Searchbar
              style={{marginBottom:20}}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              
            />
            <View>
            <Text style={{ color: "white" }}>You are on track </Text>
          </View>
          <View>
            <Text style={{ color: "#A0A0A0" }}>50% progress have made</Text>
          </View>
        </View>
      </View>

      <View style={styles.contt}>
        <TouchableOpacity
          style={styles.sqr}
          onPress={() => navigation.navigate("Record")}
        >
          <FontAwesome
              name="server"
              size={30}
              color={"#11b690"}
            ></FontAwesome>
            
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.sqr}
          onPress={() => navigation.navigate("Record")}
        >
        <FontAwesome
        name="money"
        size={30}
        color={"#11b690"}
      ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sqr}
          onPress={() => navigation.navigate("Record")}
        >
        <FontAwesome
        name="shopping-cart"
        size={30}
        color={"#11b690"}
      ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.sqr}
        onPress={() => navigation.navigate("Setting")}
      >
      <FontAwesome
      name="commenting"
      size={30}
      color={"#11b690"}
    ></FontAwesome>
      </TouchableOpacity>
      </View>
     
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  topHead: {
    // flex:1,
    // marginTop:10,
    height: 40,
    backgroundColor: "#232b32",
    color: "white",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox: {
    width: width,

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    backgroundColor: "#232b32",
  },
  sub1: {
    // flex:1 ,
    // backgroundColor:'red',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#232b32",
  },
  sub2: {
    // flex:1 ,
    // backgroundColor:'red',

    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#232b32",
    marginBottom: 40,
  },
  rec: {
    width: width,
    marginTop: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  sq1: {
    // flex:1 ,
    // backgroundColor:'red',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  q1: {
    backgroundColor: "#11b690",
    width: 150,
    height: 100,
    margin: 8,
    borderRadius: 5,
    shadowColor: "#000",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  cont: {
    width: width,
    marginTop: 0,

    height: 90,
  },
  c1: {
    // flex:1 ,
    // backgroundColor:'red',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  cc1: {
    backgroundColor: "#414b57",
    width: 80,
    height: 90,

    borderRadius: 5,
    shadowColor: "#000",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  cc2: {
    backgroundColor: "white",
    width: 250,
    height: 90,
    textAlign: "left",
    borderRadius: 5,
    shadowColor: "#000",

    padding: 10,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  square: {
    backgroundColor: "white",
    width: 90,
    height: 90,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
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
  bigBox: {
    marginTop: 5,

    marginLeft: 10,
    marginRight: 10,
  },
  bigBoxSub: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  
    backgroundColor: "#232b32",
    height: 130,
    padding: 15,
  },
  contt: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#232b32",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom:10,
  },
  sqr: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 35,
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
  }, MainStart: {
    margin: 1,
  },
 
});

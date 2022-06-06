import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import { Card } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import Category from "../Explore/Category";
const TroubleshootScreen = () => {
  const [myday, setMyday] = useState("");
  const navigation = useNavigation();

  function renderHeader() {
    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      return date + "-" + month + "-" + year; //format: dd-mm-yyyy;
    };
   
    return (
      <View
        style={{
          flexDirection: "row",
          // marginTop: 10,
          // marginBottom: 10,
          // paddingHorizontal:10,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Hello User, Need Help ?
          </Text>
          <Text>{getCurrentDate()}</Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.over}>
       <SafeAreaView style={styles.topHead}>
        <Text style={{ color: "white", fontWeight: "700" }}>
          Intelligent Car Expert 
        </Text>
      </SafeAreaView>
      <View style={styles.header}>
        <Text style={{ color: "white", fontWeight: "700" }}>Troubleshoot</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        {renderHeader()}
      </View>
      <View style={styles.MainStart}>
        <View style={styles.start}>
          <Image
            source={require("../images/analyst.png")}
            style={styles.imageSty}
          />
        </View>
      </View>
      <View style={{ height: 180, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={()=>navigation.navigate('See')}>
            <Category
              imageUri={require("../images/black.jpg")}
              name="What do you see"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Hear')}>
            <Category
              imageUri={require("../images/black.jpg")}
              name="What do you hear"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Smell')}>
            <Category imageUri={require("../images/black.jpg")} name="What odor do you smell" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('VehicleNotStarting')}>
            <Category imageUri={require("../images/black.jpg")} name="The vehicle won't start" />
          </TouchableOpacity>
        </ScrollView>
      </View>
     
      <View style={styles.header}>
        <Text style={styles.text_header}>Need a helping hand ?</Text>
      </View>
      <View style={styles.sub1}>
        
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate("Setting")}
        >
          <FontAwesome
            name="phone"
            size={30}
            color={"#11b690"}
          ></FontAwesome>
          <Text>Call us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate("Mechanic")}
        >
          <FontAwesome name="child" size={30} color={"#11b690"}></FontAwesome>
          <Text>Find Help</Text>
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
    </SafeAreaView>
  );
};
export default TroubleshootScreen;

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
  container: {
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  header: {
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
  over: {
    marginBottom: 10,
    flex: 1,
    backgroundColor: "white",
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  MainStart: {
    margin: 1,
  },
  start: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#232b32",
    borderColor: "thistle",
    borderRadius: 10,
    height: 250,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageSty: {
    width: width,
    height: 250,
  },
  header: {
    flex: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  sub1: {
   
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  }, square: {
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
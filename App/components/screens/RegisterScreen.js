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
  TextInput,Alert,
  Modal,
  Pressable
  
} from "react-native";
// import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Axios from "axios";
import CacheStore from 'react-native-cache-store';

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [username,setUsername]=useState("");
  const [myemail,setMyEmail]=useState("");
  const [pass,setPass]=useState("");
  const [carnum,setCarnum]=useState("");
  const [phone,setPhone]=useState("");
  const [modalVisible, setModalVisible] = useState(false);  
 const handleChange=()=>{
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(myemail)===true && pass && username && carnum){
  console.log(myemail)
  console.log(pass)
  console.log(username)
  console.log(carnum)
  let res=Axios.post("http://192.168.1.45:3001/appreg", {
    myemail: myemail,
    username: username,
    carnum: carnum.toUpperCase(),
    phone: phone,
    pass: pass,
  })
  .then((response) => {
    CacheStore.set('user', carnum, 50);

    navigation.navigate("Login")
    setMyEmail("")
    setUsername("")
    setCarnum("")
    setPhone("")
    setPass("")
   
    

  })
    .catch(function (error) {
      console.log("Problem with posting appointment " + error.message);
    });
  }
  else{
    console.log("Wrong Email")
    setModalVisible(true)
  }
 }
  return (
    <ScrollView style={styles.container}>
    
      <StatusBar backgroundColor="#232b32" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now !</Text>
        {/* <Text style={styles.text_subheader}>Sign in to continue</Text> */}
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
        Username
      </Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          onChangeText={newText => setUsername(newText)}
      defaultValue={username}
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
          Car number
        </Text>
        <View style={styles.action}>
          <FontAwesome name="car" color={colors.text} size={20} />
          <TextInput
            placeholder="Enter Car Number"
            placeholderTextColor="#666666"
            onChangeText={newText => setCarnum(newText)}
            defaultValue={carnum}
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
          Phone Number
        </Text>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Phone Number"
            placeholderTextColor="#666666"
            // secureTextEntry={ true }
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
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
            // onPress={() => navigation.replace("Login")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#232b32" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

         
        </View>
        <View style={{ height: 50 ,marginTop:5}}>
          <TouchableOpacity
            style={styles.btn2s}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sign In
            </Text>
          </TouchableOpacity>

        
        </View>

       
      </Animatable.View>
      <View>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wrong Input </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View></View>
    </ScrollView>
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
    color: "yellow",
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
  btn2s: {
    flex: 1,
    height: 50,
    borderRadius: 5,
   
    backgroundColor: "#232b32",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#232b32",
    borderWidth: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:width/2,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#11b690",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

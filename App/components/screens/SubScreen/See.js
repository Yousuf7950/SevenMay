import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Row } from "react-bootstrap";
const { width, height } = Dimensions.get("window");

const Smoke = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.container3}>
          <Text style={{ color: "white", fontWeight: "700" }}>
            Intelligent Car Expert
          </Text>
        </View>
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          {/* <Text style={{ fontSize: 24, fontWeight: "700" }}>
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
            </TouchableOpacity> */}
          <Text style={{ fontSize: 25, fontWeight: "700", color: "#232b32" }}>
            What do you see
          </Text>
          <TouchableOpacity
            style={styles.cot}
            onPress={() => navigation.navigate("SeeSmoke")}
          >
            <View
              style={[
                styles.item1,
                {
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <FontAwesome
                name="gears"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </View>
            <View
              style={[
                styles.item1,
                {
                  flex: 17,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={{ fontSize: 18 }}>Smoke</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity
              style={[
                styles.item1,
                {
                  flex: 2,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 5,
                },
              ]}
              onPress={() => navigation.navigate("SeeSmoke")}
            >
              <FontAwesome
                name="arrow-right"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </TouchableOpacity>
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cot}
            onPress={() => navigation.navigate("WarningLightOn")}
          >
            <View
              style={[
                styles.item1,
                {
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <FontAwesome
                name="gears"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </View>
            <View
              style={[
                styles.item1,
                {
                  flex: 17,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={{ fontSize: 18 }}>Warning Light Is On</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity
              style={[
                styles.item1,
                {
                  flex: 2,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 5,
                },
              ]}
              onPress={() => navigation.navigate("WarningLightOn")}
            >
              <FontAwesome
                name="arrow-right"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </TouchableOpacity>
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cot}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={[
                styles.item1,
                {
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <FontAwesome
                name="gears"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </View>
            <View
              style={[
                styles.item1,
                {
                  flex: 17,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={{ fontSize: 18 }}>Tyre Looks Flat</Text>
            </View>
            {/* <View style={[styles.item1,{flex:1,backgroundColor:'red'}]}></View> */}
            <TouchableOpacity
              style={[
                styles.item1,
                {
                  flex: 2,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 5,
                },
              ]}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome
                name="arrow-right"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </TouchableOpacity>
            {/* </View> */}
          </TouchableOpacity>
          
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
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                    Description: A flat tire can happen at any time, Knowing how
                    to change your tire and keeping a regular check on your
                    spare, checking the pressure and quality of the spare, can
                    wind up saving you time, money, and aggravation. Keeping a
                    tire plug kit in your vehicle is also a good way to be
                    prepared in case of a flat. Tire plug kits are inexpensive
                    and can be a life saver on long trips, they come in
                    professional and emergency kits, its a good idea to keep one
                    in your trunk or glove box.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause : Punctured Tire
                  </Text>
                  <Text style={styles.modalText}>
                  Solution : vehicle idle fluctuation, hard brake pedal, and a hissing noise heard under the hood.
                  </Text>
                  <Text style={styles.modalText}>
                  Description : Vacuum is responsible for drawing air into the cylinders, it is also responsible for the operation of emissions system, braking system and cruise control system components. Vacuum is transferred through a complex system of rubber hoses and/or plastic tubes. The engine creates a great deal of heat and over time can cause the rubber and plastic hoses to dry out and leak. A vacuum leak can be elusive and take a long time to detect. Common symptoms of a vacuum leak include 
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Damaged Valve Stem
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Smoke;

const styles = StyleSheet.create({
  container3: {
    // flex:1,
    // marginTop:10,
    height: 45,
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
    flex: 1,
    flexDirection: "row",
    width: width,
    height: 90,
    margin: 5,
    borderRadius: 2,
    shadowColor: "#000",
    //   alignItems: "center",
    //   justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 13,
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
  cot: {
    marginBottom: 5,
    marginTop: 8,
    height: 50,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 13,
  },
  item1: {
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

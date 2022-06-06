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
  const [modal1Visible, setModal1Visible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.container3}>
          <Text style={{ color: "white", fontWeight: "700" }}>
            Intelligent Car Expert
          </Text>
        </View>
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
     
          <Text style={{ fontSize: 25, fontWeight: "700", color: "#232b32" }}>
            When do you notice the antifreeze or sweet smell ?
          </Text>
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
              <Text style={{ fontSize: 18 }}>When The Heater Is On</Text>
            </View>
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
          <TouchableOpacity
            style={styles.cot}
            onPress={() => setModal1Visible(true)}
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
              <Text style={{ fontSize: 18 }}>After the vehicle is warmed up</Text>
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
              onPress={() => setModal1Visible(true)}
            >
              <FontAwesome
                name="arrow-right"
                size={25}
                color={"#11b690"}
              ></FontAwesome>
            </TouchableOpacity>
            {/* </View> */}
          </TouchableOpacity>
      

          {/* Black  */}
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
                  Description: A heater core is a small scaled down version of the radiator in the front of your vehicle. The heater core is located inside your vehicle in the dash on the passenger side inside of the blower case. They can wear down over time from heat expansion and corrosion. If your windows are fogging up when you put on the defroster there is a good chance the heater core is to blame. A small leak in the heater core will give of a steam that can cause your windows to fog and is usually accompanied with a sweet coolant/antifreeze smell.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Leaking Heater Core 
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Heating System Service 
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
          {/* White */}
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal1Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal1Visible(!modal1Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The Radiator will leak after normal wear
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Coolant Leak (smoke)
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: however, failure may result if coolant is left unserviced, collision damage, or having the vehicle overheat. To prolong the life of the radiator, perform periodic maintenance on the coolant system.
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal1Visible(!modal1Visible)}
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

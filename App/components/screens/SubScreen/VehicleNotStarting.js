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
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const [modal5Visible, setModal5Visible] = useState(false);
  const [modal6Visible, setModal6Visible] = useState(false);
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
            What happens when you try to start the vehicle ?
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
              <Text style={{ fontSize: 18 }}>The engine cranks normally but does not start</Text>
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
              <Text style={{ fontSize: 18 }}>The engine cranks over slowly</Text>
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
          <TouchableOpacity
            style={styles.cot}
            onPress={() => setModal2Visible(true)}
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
              <Text style={{ fontSize: 18 }}>The vehicle is backfiring when trying to start</Text>
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
              onPress={() => setModal2Visible(true)}
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
            onPress={() => setModal3Visible(true)}
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
              <Text style={{ fontSize: 18 }}>Nothing</Text>
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
              onPress={() => setModal3Visible(true)}
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
            onPress={() => setModal4Visible(true)}
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
              <Text style={{ fontSize: 18 }}>One strong click or knock</Text>
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
              onPress={() => setModal4Visible(true)}
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
            onPress={() => setModal5Visible(true)}
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
              <Text style={{ fontSize: 18 }}>A spinning , whirling or gear grinding sound</Text>
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
              onPress={() => setModal5Visible(true)}
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
            onPress={() => setModal6Visible(true)}
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
              <Text style={{ fontSize: 18 }}>Repeating clicking sound:'click,click,click'</Text>
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
              onPress={() => setModal6Visible(true)}
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
                  Description: If there is no fuel pressure, the engine will not start. The first check in a fuel delivery problem is the fuel gauge. If there is fuel in the tank but no fuel pressure, a bad fuel pump may be the cause.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: No Fuel Pressure
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Fuel Injection
                  </Text>
                  <Text style={styles.modalText}>
                  Description: Timing chains are subjected to normal wear and tear over the life of the vehicle. The constant wear and tear will stretch the timing chain and wear the teeth of the timing gears. This includes the seals as well
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Timing Chain/Belt 
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Timing Belt Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Description: The ignition control unit is a non-service item that should last the life the vehicle, but like other electronic components they can sometimes fail.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: No Spark
                  </Text>
                  <Text style={styles.modalText}>
Solution: Engine Tune-Up
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
                  Description: The cause for replacement may be normal wear. Batteries should last 3 to 5 years under normal use. Cause: Weak Battery
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Battery Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Description: A leaking battery, normal wear and over-tightening can all cause damage to the battery terminals.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Corroded Battery Terminals
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Battery Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Description: The starter is a high torque electrical motor that is attached to the rear of the engine. It is used to crank the engine until it can operate on its own
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Starter power.
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Starter Replacement
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
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal2Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal2Visible(!modal2Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The definition of this problem "Carbon Tracking" is when the high voltage output of your coil, finds a low voltage path through your distributor cap. The carbon build up allows the spark to travel and pass through the terminal of lowest resistance causing a misfire which leads to your rough running engine.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Ignition Component
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Engine Tune-Up
                  </Text>
                  <Text style={styles.modalText}>
                  Description: Timing chains are subjected to normal wear and tear over the life of the vehicle. The constant wear and tear will stretch the timing chain and wear the teeth of the timing gears. This includes the seals as well.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Timing Chain/Belt 
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Timing Belt Replacement
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal2Visible(!modal2Visible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal3Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal3Visible(!modal3Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The cause for replacement may be normal wear. Batteries should last 3 to 5 years under normal use.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Dead Battery
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Battery Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Description: A leaking battery, normal wear and over-tightening can all cause damage to the battery terminals.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Corroded Battery Terminals
                  </Text>
                  <Text style={styles.modalText}>
                  Solution Battery Replacement
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal3Visible(!modal3Visible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal4Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal4Visible(!modal4Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The starter is a high torque electrical motor that is attached to the rear of the engine. It is used to crank the engine until it can operate on its own
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Starter
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Starter Replacement
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal4Visible(!modal4Visible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal5Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal5Visible(!modal5Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The starter is a high torque electrical motor that is attached to the rear of the engine. It is used to crank the engine until it can operate on its own 
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Bad Starter
                  Solution: Starter Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Starter Replacement
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal5Visible(!modal5Visible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal6Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal6Visible(!modal6Visible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Repair idea(s):</Text>
                  <Text style={styles.modalText}>
                  Description: The cause for replacement may be normal wear. Batteries should last 3 to 5 years under normal use.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Dead Battery
                  </Text>
                  <Text style={styles.modalText}>
                  Solution: Battery Replacement
                  </Text>
                  <Text style={styles.modalText}>
                  Description: A leaking battery, normal wear and over-tightening can all cause damage to the battery terminals.
                  </Text>
                  <Text style={styles.modalText}>
                  Cause: Corroded Battery Terminals
                  </Text>
                  <Text style={styles.modalText}>
                  Solution Battery Replacement
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModal6Visible(!modal6Visible)}
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

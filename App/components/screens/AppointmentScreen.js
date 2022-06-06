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
  TextInput,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Axios from "axios";

// https://www.youtube.com/watch?v=Imkw-xFFLeE
import DateTimePicker from "@react-native-community/datetimepicker";
const { width, height } = Dimensions.get("window");
const AppointmentScreen = () => {
  const [slotOptions, setSlotOptions] = useState([]);
  const [car_num, setCarNum] = useState("");
  const [cust_num, setCustNum] = useState("");

  // const [cust_date,setCustDate]=useState("");
  const [cust_slot, setCustSlot] = useState("");
  useEffect(() => {
    getSlots();
    console.log("ok");
  }, []);
  const getSlots = () => {
    return Axios.get("http://192.168.1.45:3001/getslots")
      .then((res) => {
        res.data;
        setSlotOptions(res.data);
      })
      .catch((err) => console.log(err));
  };

  const [color, setColor] = useState(false);

  const [color1, setColor1] = useState(false);

  const [color2, setColor2] = useState(false);

  const [color3, setColor3] = useState(false);

  const [color4, setColor4] = useState(false);

  const [color5, setColor5] = useState(false);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [cur, setCur] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [custName, setCustName] = useState("");
  const [show, setShow] = useState(false);
  const [mydate, setMydate] = useState("");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    // console.log(fDate);
    setMydate(fDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const colorset = () => {
    if (color) setColor(false);
    else {
      setColor(true);
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
    }
  };
  const colorset1 = () => {
    if (color1) setColor1(false);
    else {
      setColor1(true);

      setColor(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
    }
  };
  const colorset2 = () => {
    if (color2) setColor2(false);
    else {
      setColor2(true);

      setColor1(false);
      setColor(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
    }
  };
  const colorset3 = () => {
    if (color3) setColor3(false);
    else {
      setColor3(true);

      setColor1(false);
      setColor2(false);
      setColor(false);
      setColor4(false);
      setColor5(false);
    }
  };
  const colorset4 = () => {
    if (color4) setColor4(false);
    else {
      setColor4(true);

      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor(false);
      setColor5(false);
    }
  };
  const colorset5 = () => {
    if (color5) setColor5(false);
    else {
      setColor5(true);

      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor(false);
    }
  };
  const bookitnowfun = () => {
    // alert(custName)
    console.log(cust_slot);
    console.log(cust_num);
    console.log(car_num);
    console.log(mydate);
    console.log(custName);
    // if(mydate==='2020-4-15'){
    //   Axios.post("http://192.168.18.148:3001/countingOne",{
    //  slotDate:mydate,
    //  timeOne:timeOne,
    //  countOne:countOne
    //   }).then((res)=>{
    //     alert("ok");
    //   })
    // }
    // console.log("Sds");

    if (cust_num.length === 11 && custName && car_num && mydate && cust_slot) {
      
      // console.log(custName.length === 0);

      Axios.post("http://192.168.1.45:3001/mobileappointment", {
        cust_name: custName,
        car_num: car_num.toUpperCase(),
        cust_num: cust_num,
        mydate: mydate,
        cust_slot: cust_slot,
        type: "online",
      })
        .then((response) => {
          
          
        })
        .catch(function (error) {
          
       
          console.log(
            "Problem with posting mobile appointment " + error.message
          );
        });
    } else {
      alert("Wrong Input");
    }
    setCustName("")
          setCarNum("")
          setCustNum("")
          setMydate("")
  };

  // setPass("")
  const bookit = (time) => setCustSlot(time);
  //  console.log(slotOptions);
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232b32" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Book Appointment</Text>
        <Text style={styles.text_subheader}>By just a click</Text>
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
          Car Number
        </Text>
        <View style={styles.action}>
          <FontAwesome name="car" color={colors.text} size={20} />
          <TextInput
          value={car_num}
            placeholder="Your Name"
            placeholderTextColor="#666666"
            onChangeText={(newText) => setCarNum(newText)}
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
          Name
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user" color={colors.text} size={20} />
          <TextInput
          value={custName}
            placeholder="Your Name"
            placeholderTextColor="#666666"
            onChangeText={(newText) => setCustName(newText)}
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
          value={cust_num}
            placeholder="Enter Phone Number"
            placeholderTextColor="#666666"
            onChangeText={(newText) => setCustNum(newText)}
            //   secureTextEntry={data.secureTextEntry ? true : false}
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
          Pick Date
        </Text>
        <View style={styles.action}>
          <Feather
            name="calendar"
            color={colors.text}
            size={20}
            onPress={() => showMode("date")}
          />
          <TextInput
          // value={mydate}
            placeholder="Select Date"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            value={mydate}
            editable={false}
          />
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={cur}
          />
        )}
        {/* <Text>{mydate}</Text> */}
        {mydate ? (
          slotOptions.map((x) => {
            const {
              slotDate,
              timeOne,
              timeTwo,
              timeThree,
              timeFour,
              timeFive,
              timeSix,
            } = x;
            if (mydate === slotDate) {
              return (
                <View style={styles.container2} key={slotDate}>
                  <View>
                    {timeOne === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>9-10</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeOne);
                          colorset();
                        }}
                      >
                        <Text>{timeOne}</Text>
                      </TouchableOpacity>
                    )}
                    {timeTwo === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>10-11</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color1 ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeTwo);
                          colorset1();
                        }}
                      >
                        <Text>{timeTwo}</Text>
                      </TouchableOpacity>
                    )}

                    {timeThree === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>11-12</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color2 ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeThree);
                          colorset2();
                        }}
                      >
                        <Text>{timeThree}</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <View>
                    {timeFour === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>12-1</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color3 ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeFour);
                          colorset3();
                        }}
                      >
                        <Text>{timeFour}</Text>
                      </TouchableOpacity>
                    )}
                    {timeFive === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>1-2</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color4 ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeFive);
                          colorset4();
                        }}
                      >
                        <Text>{timeFive}</Text>
                      </TouchableOpacity>
                    )}
                    {/* {timeSix === "" ? (
                      <TouchableOpacity style={styles.square} disabled={true}>
                        <Text style={{ color: "red" }}>2-3</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={color5 ? styles.square : styles.changed_square}
                        onPress={() => {
                          bookit(timeSix);
                          colorset5();
                        }}
                      >
                        <Text>{timeSix}</Text>
                      </TouchableOpacity>
                    )} */}
                  </View>
                </View>
              );
            }
          })
        ) : (
          <Text></Text>
        )}

        <View style={{ height: 50, marginTop: 20 }}>
          <TouchableOpacity
            style={styles.btn}
            // onPress={() => navigation.replace("Home")}
            onPress={() => bookitnowfun()}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Book it Now !
            </Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </Animatable.View>
    </View>
  );
};
export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232b32",
  },
  changed_square: {
    backgroundColor: "white",
    width: 130,
    height: 40,
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
  container2: {
    // flex:1 ,
    // backgroundColor:'red',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
  square: {
    backgroundColor: "#11b690",
    width: 130,
    height: 40,
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
  header: {
    flex: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },

  footer: {
    flex: 4,
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
    color: "#11b690",
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
  btn2: {
    flex: 1,
    height: 50,
    borderRadius: 5,

    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#232b32",
    borderWidth: 2,
  },
});

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,Dimensions,TouchableOpacity
} from "react-native";
const { width, height } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 160, width: 270, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd' ,borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,}}>
                <View style={{ flex: 2, }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15, }}
                    />
                </View>
                <View style={{ 
    
                  
                    padding:10,
                    backgroundColor: "white",}}>
               <View style={styles.sub1}>
               <TouchableOpacity style={{paddingRight:10}}
               >
               <FontAwesome
               name="play"
               size={25}
               color={"#11b690"}
             ></FontAwesome>
              </TouchableOpacity>
                <TouchableOpacity
               
                // onPress={() => navigation.navigate("Appointment")}
              >
              
                <Text style={{fontSize:15,fontWeight:'bold'}}>{this.props.name}</Text>
                <Text>{this.props.name==='Car Engine'?<Text>Last visited 2h 30mins</Text>:this.props.name==='Unusual Smoke'?<Text>Last visited 1d 2h 30mins</Text>:this.props.name==='Tyre'?<Text>Last visited 7days 2h 30mins</Text>:null}</Text>
                        
              </TouchableOpacity>
              </View>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub1: {
        // flex:1 ,
        // backgroundColor:'red',
        marginTop: 10,
        flexDirection: "row",
      
        
      },
});
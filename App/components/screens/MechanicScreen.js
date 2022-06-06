import React, { useEffect, useState } from "react";
import { Dimensions, Text, TextInput, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
const { width, height } = Dimensions.get("screen");
//Youtube
// https://www.youtube.com/watch?v=K-GjiqJIk0w
//Documentations
// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://docs.expo.dev/versions/latest/sdk/location/
const MechanicScreen = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [mechanic, setMechanic] = useState([
    {
      id: 1,
      title: "Jawad Autos",
      location: {
        longitude: "24.85613",
        latitude: "67.26069",
      },
    },
  ]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
      setLocation(location);
    })();
  }, []);

  return (
  
    <MapView initialRegion={mapRegion} style={styles.mapView}>
      <Marker
        coordinate={{ latitude: 24.9443272, longitude: 67.0457184 }}
        title="Me"
        description="my current location"
      ></Marker>

      <Marker
        key={1}
        coordinate={{ latitude: 24.85613, longitude: 67.26069 }}
        title="Jawad Autos"
        style={styles.mapView}
      ></Marker>

      <Marker
        key={2}
        coordinate={{ latitude: 24.85849, longitude: 67.2649 }}
        title="Al Mashood Auto Parts"
        style={styles.mapView}
      ></Marker>

<Marker
        key={3}
        coordinate={{ latitude: 24.85208, longitude: 67.26679 }}
        title="Hamza Autos"
        style={styles.mapView}
      ></Marker>

<Marker
        key={4}
        coordinate={{ latitude: 24.85412, longitude: 67.27245 }}
        title="Mashallah Autos"
        style={styles.mapView}
      ></Marker>

<Marker
        key={5}
        coordinate={{ latitude: 24.85136, longitude: 67.26827 }}
        title="Pakistan Autos and Spare Parts"
        style={styles.mapView}
      ></Marker>

<Marker
        key={6}
        coordinate={{ latitude: 24.85443, longitude: 67.24333 }}
        title="Carachi cars care and centre"
        style={styles.mapView}
      ></Marker>

<Marker
        key={7}
        coordinate={{ latitude: 24.85507, longitude: 67.24173 }}
        title="Maher Ali autos "
        style={styles.mapView}
      ></Marker>

<Marker
        key={8}
        coordinate={{ latitude: 24.85513, longitude: 67.23954 }}
        title="Bismillah Work Shop"
        style={styles.mapView}
      ></Marker>

<Marker
        key={9}
        coordinate={{ latitude: 24.85489, longitude: 67.23915 }}
        title="Mehmood Autos"
        style={styles.mapView}
        
      ></Marker>
    </MapView>
  );
};

export default MechanicScreen;
const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  mapView: {
    width,
    height,
  },
  mapView2: {
    width: width / 2,
    height: height / 2,
  },
});

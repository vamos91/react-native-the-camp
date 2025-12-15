import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng, Polyline, Region } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LiveTraking() {
    const [path, setPath] = useState<LatLng[]>([])
    const [region, setRegion] = useState<Region | null>(null)

    useEffect(() => {
        const getCurrentLocation = async () => {
            const { status } = await Location.getForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('no permission !')
                return 
            }
            
            const subscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.High,
                timeInterval: 2000,
                distanceInterval: 1
            },
                (location) => {
                    const newPoint = {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    }
                    console.log('newPoint', newPoint)
                    setPath((prev) => [...prev, newPoint]);

                    if (!region) {
                        setRegion({
                        latitude: newPoint.latitude,
                        longitude: newPoint.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                        });
                    }
                }
                
            )
        }
        getCurrentLocation()
    }, [])

  return (
      <SafeAreaView style={styles.map} >              
          <MapView
              style={styles.center}
              initialRegion={region}
              showsUserLocation={true}
          >
              <Polyline
                  coordinates={path}
                  strokeWidth={4}
                  strokeColor="#e91e63"
              />
          </MapView>
    </SafeAreaView>
      
  )
}


const styles = StyleSheet.create({
  map: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
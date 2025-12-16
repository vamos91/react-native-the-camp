import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng, Region } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LiveTraking() {
    const [path, setPath] = useState<LatLng[]>([])
    const [region, setRegion] = useState<Region | null>(null)

    useEffect(() => {
        const getCurrentLocation = async () => {
            //get permission
            //code...
            

            //code...
            //watchPositionAsync({
                // accuracy: ,
                // timeInterval: ,
                // distanceInterval:
            // },
            // () => {
            // push point in array
            // set region
            //})
            
        }
        getCurrentLocation()
    }, [])

  return (
      <SafeAreaView style={styles.map} >              
          <MapView
              style={styles.center}
              
              showsUserLocation={true}
          >
             
          </MapView>
    </SafeAreaView>
      
  )
}


const styles = StyleSheet.create({
  map: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
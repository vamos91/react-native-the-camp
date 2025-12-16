import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function Geofencing() {
    const ZONE = {
    latitude: null,//code...,
    longitude: null,//code...,
    radius: 200, // mètres
    };

    const [inside, setInside] = useState(false);

    const onEnterZone = () => {
        //code ta fonction de succès ici !
    };

    const checkZone = (coords: any) => {
        //code distance calcul
        
        // if (distance <= ZONE.radius) {
        //     onEnterZone();
        // }
        };

    useEffect(() => {
        const getPermission = async () => {
            //code...
            
            //watchPositionAsync
        }
        getPermission()
    }, [])

  return (
    <View className='flex-1'>
      <MapView
        style={{ flex: 1 }}
        
        >
        </MapView>
    </View>
  )
}
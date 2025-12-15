import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

export default function Geofencing() {
    const ZONE = {
    latitude: 43.4746215,
    longitude: 5.4916157,
    radius: 200, // mètres
    };

    const [inside, setInside] = useState(false);

    const onEnterZone = () => {
    if (!inside) {
        setInside(true);
        console.log("🚀 Entrée dans la zone !");
        // ta fonction ici
    }
    };

    const checkZone = (coords: any) => {
        const distance = getDistance(
            {
            latitude: coords.latitude,
            longitude: coords.longitude,
            },
            {
            latitude: ZONE.latitude,
            longitude: ZONE.longitude,
            }
        );
        console.log('getDistance', distance / 1000)
        if (distance <= ZONE.radius) {
            onEnterZone();
        }
        };

    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Location.getForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('no permission')
                return
            }
            await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    distanceInterval: 5
                },
                (location) => {
                    checkZone(location.coords)
                 })
        }
        getPermission()
    }, [])

  return (
    <View className='flex-1'>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: ZONE.latitude,
            longitude: ZONE.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
        <Marker coordinate={ZONE} />

        <Circle
            center={ZONE}
            radius={ZONE.radius}
            strokeWidth={2}
            strokeColor="rgba(0,150,255,0.8)"
            fillColor="rgba(0,150,255,0.2)"
        />
        </MapView>
    </View>
  )
}
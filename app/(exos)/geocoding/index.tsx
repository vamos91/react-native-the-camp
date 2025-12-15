import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Geocoding() {
    const [location, setLocation] = useState<LatLng>()
    const [address, setAddress] = useState()
    
    useEffect(() => {
        const getPermission = async() => {
            const { status } = await Location.getForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('ask permission !')
                return     
            }
            const currentLocation = await Location.getCurrentPositionAsync()
                if (currentLocation) {
                    console.log('geocoding', currentLocation)
                    setLocation(currentLocation)
                }
        }
        getPermission()
    }, []) 


    const geocode = async () => {
        const geocodedLocation = await Location.geocodeAsync(address)
        console.log(geocodedLocation)
        //const resultat = geocodedLocation[0]
        //setLocation({coords: {latitude: resultat.latitude, longitude: resultat.longitude}})
    }

    const reverseGeocoding = async () => {
        console.log('location', location)
        const rGeo = await Location.reverseGeocodeAsync({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude
        })
        console.log(rGeo)
    }

    return location && (
      <SafeAreaView style={styles.container}>
            <View>
                <Text>Geocoding</Text>
            </View>
            <View>
                <TextInput className='border' value={address} onChangeText={setAddress} />
                <TouchableOpacity onPress={() => geocode()} className='bg-red-300 w-full items-center p-5'>
                    <Text className='text-white'>Geocoding</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => reverseGeocoding()} className='bg-red-300 w-full items-center p-5 mt-5'>
                    <Text className='text-white'>Reverse geocoding</Text>
                </TouchableOpacity>
            </View>
            <View >
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        draggable
                        coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                        onDragEnd={(e) => {
                            const { latitude, longitude } = e.nativeEvent.coordinate;
                            setLocation({
                                coords: { latitude: latitude, longitude: longitude }
                            });
                            console.log(location)
                        }}
                    />
                </MapView>
            </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: '100%',
        height: '100%'
    }
})
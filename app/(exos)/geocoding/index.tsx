import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Geocoding() {
    const [location, setLocation] = useState<LatLng>()
    const [address, setAddress] = useState()
    
    useEffect(() => {
        const getPermission = async() => {
            //get permission
            //code...

            //get current location
            //code...

            //set location
            //code...
        }
        getPermission()
    }, []) 

    //convert address to coordinates
    const geocode = async () => {
        //code...
    }

    //convert coordinates to address
    const reverseGeocoding = async () => {
        //code...
    }

    return (
      <SafeAreaView style={styles.container}>
            <View>
                <TextInput className='border w-4/5 m-auto' placeholder='Ex: 4 rue des acacias Paris' value={address}  />
                <TouchableOpacity onPress={() => geocode()} className='bg-red-300 w-4/5 m-auto mt-6 items-center p-5'>
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
                        latitude: 43.4747908,
                        longitude: 5.4910183,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 43.4747908, longitude: 5.4910183 }}
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
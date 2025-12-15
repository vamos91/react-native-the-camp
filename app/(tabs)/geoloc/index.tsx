import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { markers } from '../../../data/places';


export default function Geoloc() {

  const [POI, setPOI] = useState(markers)
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [coordinate, setCoordinate] = useState<LatLng>({
    latitude: 43.474775,
    longitude: 5.491035
  })
  

  useEffect(() => {

    const getCurrentLocation = async () => {
      const {status} = await Location.requestForegroundPermissionsAsync()
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync()
      if (location) {
        const { coords } = location
        console.log(coords)
        setCoordinate({latitude: coords.latitude, longitude: coords.longitude})
      }
    }
    } 
    getCurrentLocation()
  }, [])

  
  //exo1
  const handlePressMap = (e) => {
    console.log(e)
    setIsOpen(!isOpen)
    setCoordinate({latitude: e.latitude, longitude: e.longitude})
  }

  const addCoord = () => {
    const poiInfos = {
      title: title,
      desc: desc,
      ...coordinate
    }
    setPOI([...POI, poiInfos])
    setIsOpen(false)
  }

  const closeModal = () => {
    setCoordinate({latitude: 0, longitude: 0})
    setIsOpen(false)
  }

  return coordinate && (
    <SafeAreaView className='flex-1'>
      <View >
              <MapView 
              style={styles.map}
              onLongPress={(e) => handlePressMap(e.nativeEvent.coordinate)}
              initialRegion={{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              
            >
              {
                POI && POI.map((item: any, index: any) => (
                  <Marker
                    key={index}
                    title={item.title}
                    description={item.desc}
                  coordinate={{latitude: item.latitude, longitude: item.longitude}}
                />
                ))
              }
              <Marker
                coordinate={coordinate}
              />
            </MapView>
            <Modal
              visible={isOpen}
            >
              <View className='flex-1 bg-white rounded-t-3xl p-6 justify-end'>
                <View className='mb-6'>
                  <View className='mb-4'>
                    <TextInput
                      placeholder='Title'
                      className='border border-gray-300 rounded-lg px-4 py-3 text-base'
                  placeholderTextColor='#999'
                  onChangeText={setTitle}
                    />
                  </View>
                  <View>
                <TextInput
                  onChangeText={setDesc}
                      placeholder='Description'
                      className='border border-gray-300 rounded-lg px-4 py-3 text-base h-24'
                      placeholderTextColor='#999'
                  multiline
                
                    />
                  </View>
                </View>
                <View className='flex-row gap-3'>
                  <TouchableOpacity className='flex-1 bg-gray-200 rounded-lg py-4 items-center'>
                    <Text onPress={() => closeModal()} className='text-gray-800 font-semibold'>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addCoord()} className='flex-1 bg-red-500 rounded-lg py-4 items-center'>
                    <Text className='text-white font-semibold'>Add Position</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
})
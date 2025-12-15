import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import { Tabs } from 'expo-router';


export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="polyline/index"
        options={{
          title: 'Polyline',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="geocoding/index"
        options={{
          title: 'Geocoding',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-marker" color={color} />,
        }}
      />
      <Tabs.Screen
        name="livetracking/index"
        options={{
          title: 'Live-tracking',
          tabBarIcon: ({ color }) => <Feather name="move" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="geofencing/index"
        options={{
          title: 'Geofencing',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="smoke-detector-variant" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
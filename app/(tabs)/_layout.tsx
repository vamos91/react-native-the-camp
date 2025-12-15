import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';


export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="netflix/index"
        options={{
          title: 'Netflix',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="weather/index"
        options={{
          title: 'Weather',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cloud" color={color} />,
        }}
          />
          <Tabs.Screen
        name="geoloc/index"
        options={{
          title: 'Geoloc',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-marker" color={color} />,
        }}
      />
    </Tabs>
  )
}
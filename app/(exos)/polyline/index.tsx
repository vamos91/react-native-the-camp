import MapView, { LatLng, Polyline } from "react-native-maps";

import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {

    const points: LatLng[] = [
    { latitude: 48.8588255, longitude: 2.264634 }, // Monas
    { latitude: 40.6966727, longitude: -74.309145 }, // Kota Tua
        ];
        
  return (
    <SafeAreaView className="flex-1">
          <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: points[0].latitude,
                longitude: points[0].longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
          >
              <Polyline
                coordinates={points}
                strokeWidth={4}
                strokeColor="#FF0000"
            />
        </MapView>
    </SafeAreaView>
  )
}
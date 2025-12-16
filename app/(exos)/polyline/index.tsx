import MapView, { LatLng } from "react-native-maps";

import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {

    const points: LatLng[] = [
    //code... provenance, // Paris
    //code... destination, // New york
        ];
        
  return (
    <SafeAreaView className="flex-1">
          <MapView
              style={{ flex: 1 }}
              //code...
          >
              
        </MapView>
    </SafeAreaView>
  )
}
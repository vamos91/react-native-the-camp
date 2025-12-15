import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { LatLng } from "react-native-maps";

export const useUserLocation = () => {
  const [location, setLocation] = useState<LatLng | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("ask permission !");
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync();
      if (currentLocation) {
        console.log("geocoding", currentLocation);
        setLocation(currentLocation);
      }
      return location;
    };
    getPermission();
  }, []);
};

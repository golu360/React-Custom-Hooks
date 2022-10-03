import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [latitude, setLocation] = useState({ latitude: "", longitude: "" });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      throw new Error("Geolocation Not Supported");
    }
  }, []);
  return latitude;
};

export default useGeoLocation;

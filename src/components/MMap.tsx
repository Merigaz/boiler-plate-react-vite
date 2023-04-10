import { GoogleMap} from "@react-google-maps/api";
import { useState } from "react";
/* function Geocoder() {
  const address = "cra 46 # 74";
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const API_KEY = "AIzaSyAyQEEf2zRF4VVGWRV1PmsI3sG5H6DOoh4";
  
  const handleGeocode = async () => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === 'OK') {
      setLatitude(data.results[0].geometry.location.lat);
      setLongitude(data.results[0].geometry.location.lng);
    } else {
      console.log('Geocode was not successful for the following reason:', data.status);
    }
    console.log (longitude, latitude)
  };}
   */
function MMap() {
  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };

  
  return (
    
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={{
        mapId: '7d629a6dbe464404',
      }} /> 
      
   
  );
}

export default MMap;

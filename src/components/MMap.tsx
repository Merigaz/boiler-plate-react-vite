import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MMap() {
  const containerStyle = {
    width: '100%',
    height: '800px'
  };

  const center = {
    lat: 10.9632,
    lng: -74.7964
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAyQEEf2zRF4VVGWRV1PmsI3sG5H6DOoh4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default MMap;
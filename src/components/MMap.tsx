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
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default MMap;
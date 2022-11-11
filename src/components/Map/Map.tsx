import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from './mapStyles';

const API_KEY = "AIzaSyC0IVwNTeYOMo475NZqiKmKovtMDxeioKI";

const Map: React.FC<{location: {long: number, lat: number}}> = ({ location: {long, lat} }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  if (isLoaded){
    return (
      <GoogleMap
        zoom={3}
        center={{ lat: lat, lng: long }}
        mapContainerClassName='w-full h-full z-10'
        options={{styles: mapStyles}}
      >
        <Marker position={{ lat: lat, lng: long }} />
      </GoogleMap>
    );
  } return null;
};

export default Map;

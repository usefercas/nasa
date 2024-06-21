import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SpaceMap = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const apiKey = 'da71f974e89e6a9b12c190077ff6c259';
      const apiUrl = `https://api.openweathermap.org/data/2.5/box/city?bbox=-180,-90,180,90,10&appid=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        setCities(response.data.list);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setError('Failed to fetch cities. Please try again later.');
      }
    };

    fetchCities();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cities.map(city => (
          <Marker key={city.id} position={[city.coord.lat, city.coord.lon]}>
            <Popup>
              <div style={{ maxWidth: '300px' }}>
                <h3>{city.name}</h3>
                <p>Temperature: {city.main.temp} &#8451;</p>
                <p>Weather: {city.weather[0].description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {error && (
        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(255, 0, 0, 0.5)', padding: '10px', borderRadius: '5px', zIndex: 1000 }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SpaceMap;


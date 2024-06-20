import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NasaApodComponent.css'; // Importa estilos CSS personalizados

const NasaApodComponent = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const apiKey = '2i7VrrXqPE8CM6luedgglMNUkWhxNvuNnc6zlDax';

  useEffect(() => {
    fetchApodData();
  }, [selectedDate]);

  const fetchApodData = () => {
    setLoading(true);
    axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: apiKey,
        date: selectedDate
      }
    })
    .then(response => {
      setApodData(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching APOD data:', error);
      setLoading(false);
    });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!apodData) {
    return <div>Failed to fetch APOD data</div>;
  }

  return (
    <div className="apod-container">
      <form>
        <label>
          Seleccione una fecha:
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </label>
      </form>
      <h2>{apodData.title}</h2>
      <img src={apodData.url} alt={apodData.title} className="apod-image" />
      <p>{apodData.explanation}</p>
    </div>
  );
};

export default NasaApodComponent;

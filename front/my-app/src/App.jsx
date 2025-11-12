import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  // useEffect se izvršava kada se komponenta prvi put prikaže
  useEffect(() => {
    axios.get("http://46.62.217.191:44333/WeatherForecast")
      .then((response) => {
        setData(response.data); // čuvamo podatke iz API-ja
      })
      .catch((error) => {
        console.error("Greška pri dohvatanju:", error);
      });
  }, []); // [] znači da se pokreće samo jednom, na mount

  return (
    <div>
      <h1>React + .NET API Test</h1>
      <p>Pozdrav iz nove deploy verzije!</p>
      <p>Pozdrav iz nove deploy verzije OPET!</p>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Učitavam podatke...</p>
      )}
    </div>
  );
}

export default App;

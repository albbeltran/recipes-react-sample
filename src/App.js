import './App.css';
import Menu from './components/Menu';
import Receta from './components/Receta';
import { useEffect, useState } from 'react';

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://mocki.io/v1/dc968881-1524-47eb-bd59-cee9d43869ad');
      const datosJson = await res.json();
      setDatos(datosJson);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Menu titulo="Mis Reactcetas">
        {datos.length > 0 ? (
          <Receta recetas={datos}></Receta>
        ) : (
          <p>Cargando datos...</p>
        )}
      </Menu>
    </div>
  );
}

export default App;

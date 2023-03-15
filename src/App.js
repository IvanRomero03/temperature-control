import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  // let temperatureColor = 'cold'
  // let temperatureValue = '10'
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const [temperatureValue, setTemperatureValue] = useState(10);

  // 2) Agregar las funciones para manejar los eventos de Click a los botones para que
  //     cuando se presionen se incremente o decremente el valor de la temperatura.

  // 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
  //    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  useEffect(() => {
    if (temperatureValue >= 20) {
      setTemperatureColor("hot");
    } else {
      setTemperatureColor("cold");
    }
  }, [temperatureValue]);
  // Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
  // De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setTemperatureValue(temperatureValue + 1);
          }}
          disabled={temperatureValue === 30}
        >
          +
        </button>
        <button
          onClick={() => {
            setTemperatureValue(temperatureValue - 1);
          }}
          disabled={temperatureValue === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;

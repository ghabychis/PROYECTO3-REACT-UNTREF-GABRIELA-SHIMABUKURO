import { Historial } from "./Pages/Historial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "./Pages/Principal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Principal />} />

          {/* Ruta para el historial */}
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

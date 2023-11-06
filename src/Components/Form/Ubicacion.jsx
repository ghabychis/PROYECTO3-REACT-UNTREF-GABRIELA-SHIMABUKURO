export function Ubicacion({ datos, setUbicacion }) {
  const handleChange = (e) => {
    setUbicacion(e.target.value);
  };
  return (
    <div>
      <label htmlFor="ubicacion">Selecciona la ubicación</label>
      <select id="ubicacion" onChange={handleChange}>
        <option selected disabled>
          ...
        </option>
        {datos.map((item, index) => (
          <option key={index} value={item.tipo}>
            {item.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Ubicacion;

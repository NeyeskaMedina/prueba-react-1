export const Buscador = ({ originalData, setData, setChangeSelect, setLoading }) => {

  const handleChange = (e) => {
      const valorBusqueda = e.target.value;
      if (valorBusqueda === "Seleccione una region"){
          setLoading(false);
          setData(originalData);
          setChangeSelect(true);
      }
      const datosFiltrados = originalData.filter((comuna) =>
      comuna.fk_region === valorBusqueda);
      setData(datosFiltrados);
  }
  return (
    <>
    <div className="selectBuscador">
        <select onChange={handleChange} className="form-select w-50" aria-label="Default select example">
                <option value="Seleccione una region">Seleccione una region</option>
                <option value="1">Arica y Parinacota</option>
                <option value="2">Tarapaca</option>
                <option value="3">Antofagasta</option>
                <option value="4">Atacama</option>
                <option value="5">Coquimbo</option>
                <option value="6">Valparaiso</option>
                <option value="7">Metropolitana</option>
                <option value="8">Libertador General B. O.</option>
                <option value="9">Maule</option>
                <option value="10">BioBio</option>
                <option value="11">Araucania</option>
                <option value="12">Los Rios</option>
                <option value="13">Los Lagos</option>
                <option value="14">Aysen</option>
                <option value="15">Punta Arenas</option>
                <option value="16">Ñuble</option>

        </select>
    </div>
    </>

  );


}
export default Buscador;
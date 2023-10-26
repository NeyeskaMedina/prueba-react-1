import { useEffect } from 'react';
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const MiApi = ({ data, setData, setChangeSelect, changeSelect, setOriginalData, setLoading, loading }) => {

  useEffect(() => {
    const url = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php";
      (async () =>{
        try {
          const result = await axios.get(url)
          const response = await result.data
          response.sort ((a, b) => a.local_nombre.trim().localeCompare (b.local_nombre));
          console.log(response);
          setData(response);
          setOriginalData(response);
          setLoading(true)
          setChangeSelect(false)
        } catch (err) {
          console.error("Error al cargar datos de la API:", err);
        }
      })()
  }, [changeSelect]);

  {if(loading) {
        return (
          <table className="table table-hover w-75 align-self-center">
            <thead>
              <tr>
                <th scope="col">Farmacia</th>
                <th scope="col">Apertura</th>
                <th scope="col">Cierre</th>
                <th scope="col">Dirección</th>
              </tr>
            </thead>
            <tbody>
            {data.map(item => (       
                    <tr>
                        <th scope="row">{item.local_nombre}</th>
                        <td>{item.funcionamiento_hora_apertura}</td>
                        <td>{item.funcionamiento_hora_apertura}</td>
                        <td>{item.local_direccion}</td>
                    </tr>

            ))};
            
            </tbody>
          </table>
        )
    } else {
      return (
        <>
          <Nav title="CARGANDO..." />
          <Footer />
        </>
      )
    }
  }
  
}
export default MiApi;
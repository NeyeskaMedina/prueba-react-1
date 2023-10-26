import { Nav } from "./components/Nav";
import { Buscador } from "./components/Buscador";
import { MiApi } from "./components/MiApi";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
const [data, setData] = useState([]);
const [originalData, setOriginalData] = useState([]);
const [changeSelect, setChangeSelect] = useState(false);
const [loading, setLoading] = useState(false);
  return (
    <>
        <Nav 
          title="Farmacias de Turno"
        />
        <Buscador 
            originalData= {originalData}
            setData = {setData}
            setChangeSelect = {setChangeSelect}
            setLoading = {setLoading}
        />
        <MiApi 
            data= {data}
            setData = {setData}
            setChangeSelect = {setChangeSelect}
            changeSelect = {changeSelect}
            setOriginalData = {setOriginalData}
            setLoading = {setLoading}
            loading = {loading}
        />
        <Footer
          by="by: @NeyeskaGoidas" 
        />
    </>
  )
}

export default App;

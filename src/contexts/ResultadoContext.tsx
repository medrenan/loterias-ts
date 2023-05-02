import { createContext, useState, useEffect } from "react";
import { LoteriasProps, Resultado } from "../types/resultado";
import resultadoService from "../services/ResultadosService";

const ResultadoContext = createContext({} as LoteriasProps);

function ResultadoContextProvider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Resultado);
    const [lotofacil, setLotofacil] = useState({} as Resultado)
    const [quina, setQuina] = useState({} as Resultado)

    async function buscaJogosLoteria() {
        const megasenaResponse = await resultadoService.getUltimoResultadoMegaSena();
        const lotofacilResponse = await resultadoService.getUltimoResultadoLotofacil();
        const quinaResponse = await resultadoService.getUltimoResultadoQuina();
    
        setMegasena(megasenaResponse);
        setLotofacil(lotofacilResponse);
        setQuina(quinaResponse);
    }

    useEffect(() => {
        buscaJogosLoteria()
    }, []);

    return (
        <ResultadoContext.Provider value={{megasena, lotofacil, quina}}>
            {children}
        </ResultadoContext.Provider>
    );

}

export {ResultadoContext, ResultadoContextProvider};
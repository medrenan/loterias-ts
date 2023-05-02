import { useContext } from "react";
import { ResultadoContext } from "../contexts";

function useResultado() {
    const resultado = useContext(ResultadoContext);
    return resultado;
}

export default useResultado;
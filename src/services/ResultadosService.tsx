import { Resultado } from "../types/resultado";
import api from "./api";

const MEGA_SENA = "megasena"
const LOTOFACIL = "lotofacil"
const QUINA = "quina"

class ResultadosService {
    private async get(tipoJogo: string): Promise<Resultado> {
        const { data } = await api.get("/");
        return data[`${tipoJogo}`];
    }

    async getUltimoResultadoQuina(): Promise<Resultado> {
        return this.get(QUINA);
    }

    async getUltimoResultadoMegaSena(): Promise<Resultado> {
        return this.get(MEGA_SENA);
    }

    async getUltimoResultadoLotofacil(): Promise<Resultado> {
        return this.get(LOTOFACIL);
    }
}

const resultadoService = new ResultadosService();
export default resultadoService;
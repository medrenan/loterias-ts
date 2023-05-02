export interface LoteriasProps {
    megasena: Resultado, 
    lotofacil: Resultado,
    quina: Resultado
}

export interface Resultado {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso: number,
    valorPremio: number
}
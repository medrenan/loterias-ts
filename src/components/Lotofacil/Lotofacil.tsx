import { useResultado } from "../../hooks";

export default function Lotofacil() {
    const { lotofacil } = useResultado();

    function renderDezenas() {
        return (
        <>
            <td>
                    {[...Array(15)].map((_, index) => (
                    <>
                    {index % 5 === 0 && <tr key={index / 5} />}
                    <td
                        key={index}
                        className="dezenasLotofacil"
                        style={{
                        borderBottom: index < 10 ? "1px solid black" : undefined
                        }}
                    >
                        <label className="labelDezenasLotofacil">{lotofacil.dezenas[index]}</label>
                    </td>
                    </>
                ))}
          </td>
        </>
        );
    };
    
    return (    
        <div> 
            <table>
                <tr className="linha">
                    <td> <td className="primeiraColuna"><img src={process.env.PUBLIC_URL + '/assets/trevo-lotofacil.png'} /></td><td><label className="tituloLotofacil">LOTOFÁCIL</label></td></td>
                    <td>
                        {renderDezenas()}
                    </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td className="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}:</td>
                </td>
                    <td className="acumulado"><h1>{lotofacil.acumulado ? "ACUMULOU!": "Não Acumulado"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td className="tituloLotofacil"> R$ {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    );
}
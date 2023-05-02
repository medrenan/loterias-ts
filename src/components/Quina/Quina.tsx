import { useResultado } from "../../hooks"

export default function Quina() {
    const { quina } = useResultado()

    function renderDezenas() {
        return (
        <>
            {quina.dezenas.map(num => {
                return (<>
                    <td className="dezenasQuina">
                        <label className="labelDezenasQuina">{num}</label>
                    </td>
                    <td className="espacoDezenas" />                
                </>
            )})}
        </>
        );
    };
    
    return (    
        <div> 
            <table>
                <tr className="linha">
                    <td> <td className="primeiraColuna"><img src={process.env.PUBLIC_URL + '/assets/trevo-quina.png'} /></td><td><label className="tituloQuina">QUINA</label></td></td>
                    <td>
                        {renderDezenas()}
                    </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td className="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:</td>
                </td>
                    <td className="acumulado"><h1>{quina.acumulado ? "ACUMULOU!": "Não Acumulado"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td className="tituloQuina"> R$ {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    );
}
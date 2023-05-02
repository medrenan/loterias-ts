import { useResultado } from "../../hooks";

export default function Megasena() {
    const { megasena } = useResultado();

    function renderDezenas() {
        return (
        <>
            {megasena.dezenas.map(num => {
                return (<>
                    <td className="dezenas">
                        <label className="labelDezenasMegasena">{num}</label>
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
                    <td> <td className="primeiraColuna"><img src={process.env.PUBLIC_URL + '/assets/trevo-megasena.png'} /></td><td><label className="tituloMegasena">MEGA-SENA</label></td></td>
                    <td>
                        {renderDezenas()}
                    </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td className="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                </td>
                    <td className="acumulado"><h1>{megasena.acumulado ? "ACUMULOU!": "Não Acumulado"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td className="tituloMegasena"> R$ {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    );
}
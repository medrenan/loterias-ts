import Lotofacil from "../components/Lotofacil/Lotofacil";
import Megasena from "../components/MegaSena/MegaSena";
import Quina from "../components/Quina/Quina";
import { useResultado } from "../hooks"

export default function Home() {
    const { megasena, lotofacil } = useResultado();

    function isCarregado() {
        return megasena.numeroDoConcurso && lotofacil.numeroDoConcurso;
    }

    function renderLoterias() {
        return (
            <>
                <Megasena />
                <hr className="divisa"/>
                <Lotofacil />
                <hr className="divisa"/>
                <Quina />
            </>
        )
    }

    function renderCarregando() {
        return (
            <div className="carregando">
                Carregando ...
            </div>
        )
    }

    return (
        <>
            {isCarregado() ? renderLoterias() : renderCarregando()}
        </>
    )
}
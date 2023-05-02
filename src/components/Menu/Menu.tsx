import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
            <nav className="navbar">
                <Link to="/lotofacil" className="link lotofacil">
                    Lotofácil
                </Link>
                <Link to="/megasena" className="link megasena">
                    Megasena
                </Link>
                <Link to="/quina" className="link quina">
                    Quina
                </Link>
            </nav>
        </>
    )
}
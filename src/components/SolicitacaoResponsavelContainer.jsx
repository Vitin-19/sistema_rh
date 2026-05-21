import { useState } from "react";
import "../App.css";

const SolicitacaoResponsavelContainer = () => {
    const [nomeProfessor, setNome] = useState("");
    const [nomeDisciplina, setDisciplina] = useState("");
    const [solicitacaoStatus, setStatus] = useState("");
    return (
        <div className="RespSolicContainer">
            <header>
                <h1>Solicitações Gerais</h1>
            </header>
            <section>
                <div>
                    <h2>Professor: {nomeProfessor}</h2>
                    <p>Disciplina: {nomeDisciplina}</p>
                    <p>Status: {solicitacaoStatus}</p>
                    <button>Aprovar</button>
                    <button>Rejeitar</button>
                </div>
            </section>
        </div>
    );
};

export default SolicitacaoResponsavelContainer;

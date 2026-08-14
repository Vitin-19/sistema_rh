import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// exemplo de professor improvisado

const listaSolicit = [
    {
        id: 1,
        professor: "Fulano",
        disciplina: "Física",
        status: "Aceito",
        documento: "Solicitação 3"
    },
    {
        id: 1,
        professor: "Fulano",
        disciplina: "Física",
        status: "Rejeitado",
        documento: "Solicitação 2"
    },
    {
        id: 1,
        professor: "Fulano",
        disciplina: "Física",
        status: "Rejeitado",
        documento: "Solicitação 1"
    },
    {
        id: 1,
        professor: "Fulano",
        disciplina: "Física",
        status: "Aceito",
        documento: "Solicitação 3"
    },
];

const SolicitacaoProfessorContainer = () => {

    const [solicitacoes, setSolicitacoes] = useState(listaSolicit);
    const navigate = useNavigate();

    const handleAbrirChamado = () => {
        navigate("/tipodocumento");
    };

    return (
        <div className="page-wrapper">
            <header className="tituloProfessor">
                <h1>SUAS SOLICITAÇÕES</h1>
            </header>

            <section className="SolicitProfContainer">
                {solicitacoes.map((item) => (
                    <div key={item.id} className="card-solicitacao">
                        <div className="informacoes">
                            <div className="documento-container">
                                <span className="label">Documento: </span>
                                <span className="documento-nome">{item.documento}</span>
                            </div>

                            <div className="status-container">
                                <span className="label">Status:</span>
                                <span className={`status-valor status-${item.status.toLowerCase()}`}>{item.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            
            <div className="container-botao">
                <button className="abrir-chamado" onClick={handleAbrirChamado}>
                    Abrir chamado
                </button>
            </div>
        </div>
    );
};

export default SolicitacaoProfessorContainer;
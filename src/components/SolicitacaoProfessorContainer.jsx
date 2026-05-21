import { useState } from "react";
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
];

const SolicitacaoProfessorContainer = () => {

    const [solicitacoes, setSolicitacoes] = useState(listaSolicit);

    return (
        <div>
            <header className="titleProfessor">
                <h1>SUAS SOLICITAÇÕES</h1>
            </header>

            <section className="SolicitProfContainer">
                {solicitacoes.map((item) => (
                    <div key={item.id} className="card-solicitacao">
                        <div className="informacoes">
                            <h2>Status: {item.status}</h2>
                            <h2>Documento: {item.documento}</h2>
                        </div>
                    </div>
                ))}
            </section>
            
            <div className="container-botao">
                <button className="abrir-chamado"> Abrir chamado </button>
            </div>
        </div>
    );
};

export default SolicitacaoProfessorContainer;
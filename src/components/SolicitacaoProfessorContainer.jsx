import { useState } from "react";
import "../App.css";

// exemplo de professor improvisado

const listaSolicit = [
    {
        id: 1,
        professor: "Fulano",
        disciplina: "Física",
        status: "Rejeitado",
        documento: "Solicitação 1"
    }
];

const SolicitacaoProfessorContainer = () => {

    const [solicitacoes, setSolicitacoes] = useState(listaSolicit);

    return (
        <div>
            <header>
                <h1>Suas Solicitações</h1>
            </header>

            <div className="SolicitProfContainer">
                <section>
                    {solicitacoes.map((item) => (
                        <div key={item.id} className="card-solicitacao">
                            <div className="informacoes">
                                <h2>Status: {item.status}</h2>
                                <h2>Documento: {item.documento}</h2>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            
            <div>
                <button className="abrir-chamado"> Abrir chamado </button>
            </div>
        </div>
    );
};

export default SolicitacaoProfessorContainer;
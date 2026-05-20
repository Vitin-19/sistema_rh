import { useState } from "react";
import "../App.css";
import "../styles/SolicitacaoResponsavelContainer.css";
const SolicitacaoResponsavelContainer = () => {
  const [nomeProfessor, setNome] = useState("");
}

return (
    <div className="solicitacaoResponsavelContainer">
        <header className="title">
            <h1>Solicitações Gerais</h1>
        </header>

        <section className="solicitacaoResponsavelSection">
            <div className="solicitacaoResponsavelCard">
                <h2>Professor: {nomeProfessor}</h2>
                <p>Disciplina: Matemática</p>
                <p>Motivo: Solicitação de material didático</p>
                <p>Status: Pendente</p>
                <button className="approveButton">Aprovar</button>
                <button className="rejectButton">Rejeitar</button>
            </div>
        </section>
    </div>
    )

export default SolicitacaoResponsavelContainer;
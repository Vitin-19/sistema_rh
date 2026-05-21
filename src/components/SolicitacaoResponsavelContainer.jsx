import { useState } from "react";
import "../App.css";
import SolicitacaoResponsavelCard from "./SolicitacaoResponsavelCard";

const SolicitacaoResponsavelContainer = () => {
  const [solicitacoes, setSolicitacoes] = useState([
    {
      id: 1,
      professor: "Ana Souza",
      disciplina: "Matemática",
    },
    {
      id: 2,
      professor: "Carlos Pereira",
      disciplina: "História",

    },
    {
      id: 3,
      professor: "Mariana Lima",
      disciplina: "Física",

    },
    {
      id: 4,
      professor: "Paulo Santos",
      disciplina: "Química",

    },
  ]);

  // expose a lightweight global reference to allow simple view handler
  // (keeps this change minimal; can be refactored to use context/modal)
  window.__solicitacoes_global__ = solicitacoes;

  const handleApprove = (id) => {
    setSolicitacoes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Aprovado" } : item
      )
    );
  };

  const handleReject = (id) => {
    setSolicitacoes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Rejeitado" } : item
      )
    );
  };

  return (
    <div className="RespSolicContainer">
      <header className="resp-header">
        <div>
          <h1>Solicitações Gerais</h1>
        </div>
      </header>

      <section className="cards-grid">
        {solicitacoes.map((item) => (
          <SolicitacaoResponsavelCard
            key={item.id}
            professor={item.professor}
            disciplina={item.disciplina}
            onApprove={() => handleApprove(item.id)}
            onView={() => handleView(item.id)}
            onReject={() => handleReject(item.id)}
          />
        ))}
      </section>
    </div>
  );
};


export default SolicitacaoResponsavelContainer;

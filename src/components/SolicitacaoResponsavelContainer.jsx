import "../App.css";
import SolicitacaoResponsavelCard from "./SolicitacaoResponsavelCard";

const solicitacoes = [
  {
    id: 1,
    professor: "Ana Souza",
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
];

const SolicitacaoResponsavelContainer = () => {
  return (
    <div className="main">
      <header className="resp-header">
        <div>
          <h1>Solicitações Gerais</h1>
        </div>
      </header>
      <div className="RespSolicContainer">
        <section className="cards-grid">
          {solicitacoes.map((item) => (
            <SolicitacaoResponsavelCard
              key={item.id}
              professor={item.professor}
              disciplina={item.disciplina}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SolicitacaoResponsavelContainer;

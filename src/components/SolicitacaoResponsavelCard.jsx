const SolicitacaoResponsavelCard = ({ professor, disciplina }) => {
  return (
    <article className="card-solicitacao">
      <div className="informacoes">
        <div className="TextoProfessor">
          <h2>Professor: </h2>
          <p>{professor}</p>
        </div>
        <button type="button" className="button-view">
          Visualizar
        </button>
      </div>

      <div className="card-actions">
        <button type="button" className="button-approve">
          Aprovar
        </button>
        <button type="button" className="button-reject">
          Rejeitar
        </button>
      </div>
    </article>
  );
};

export default SolicitacaoResponsavelCard;

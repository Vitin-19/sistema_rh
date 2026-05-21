const SolicitacaoResponsavelCard = ({ professor, disciplina, status, onApprove, onReject, onView }) => {
  return (
    <article className="card-solicitacao">
      <div className="informacoes">
        <h2>Professor</h2>
        <p>{professor}</p>

        <h2>Disciplina</h2>
        <p>{disciplina}</p>

      </div>

      <div className="card-actions">
        <button className="button-approve" onClick={onApprove}>
          Aprovar
        </button>
        <button className="button-view" onClick={onView}>
          Visualizar
        </button>
        <button className="button-reject" onClick={onReject}>
          Rejeitar
        </button>
      </div>
    </article>
  );
};

export default SolicitacaoResponsavelCard;

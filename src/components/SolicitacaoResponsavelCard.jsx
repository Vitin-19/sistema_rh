const SolicitacaoResponsavelCard = ({ professor,onApprove, onReject, onView }) => {
  return (
    <article className="card-solicitacao">
      <div className="informacoes">
        <div className="TextoProfessor">
          <h2>Professor: </h2>
          <p>{professor}</p>
        </div>
        <button className="button-view" onClick={onView}>
          Visualizar
        </button>

      </div>

      <div className="card-actions">
        <button className="button-approve" onClick={onApprove}>
          Aprovar
        </button>
        <button className="button-reject" onClick={onReject}>
          Rejeitar
        </button>
      </div>
    </article>
  );
};

export default SolicitacaoResponsavelCard;

import { useState } from "react";
import "../App.css";

const JustificativaFaltaContainer = () => {
  const [date, setDate] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [options, setOptions] = useState({
    motivoSaude: false,
    consulta: false,
    falecimento: false,
    compromisso: false,
    outro: false,
  });
  const [outroText, setOutroText] = useState("");
  const [attachments, setAttachments] = useState(0);

  const handleToggle = (field) => {
    setOptions((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleAddAttachment = (event) => {
    event.preventDefault();
    setAttachments((prev) => prev + 1);
  };

  return (
    <div className="justificativaScreen">
      <header className="justificativaTitle">
        <h1>JUSTIFICATIVA DE FALTA</h1>
      </header>

      <div className="justificativaContainer">
        <form className="justificativaForm">
        <div className="fieldRow">
          <label htmlFor="dataInput">Data:</label>
          <input
            id="dataInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
          />
        </div>

        <div className="fieldRow horarioRow">
          <label htmlFor="horaInicio">Horário:</label>
          <input
            id="horaInicio"
            type="time"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            className="input inputSmall"
          />
          <span className="ateLabel">às:</span>
          <input
            type="time"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            className="input inputSmall"
          />
        </div>

        <div className="checkboxGroup">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={options.motivoSaude}
              onChange={() => handleToggle("motivoSaude")}
            />
            <span className="checkboxSquare">{options.motivoSaude ? "✓" : ""}</span>
            Motivo de saúde
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={options.consulta}
              onChange={() => handleToggle("consulta")}
            />
            <span className="checkboxSquare">{options.consulta ? "✓" : ""}</span>
            Consulta / atendimento médico
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={options.falecimento}
              onChange={() => handleToggle("falecimento")}
            />
            <span className="checkboxSquare">{options.falecimento ? "✓" : ""}</span>
            Falecimento de Familiar
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={options.compromisso}
              onChange={() => handleToggle("compromisso")}
            />
            <span className="checkboxSquare">{options.compromisso ? "✓" : ""}</span>
            Compromisso institucional
          </label>

          <div className="checkboxRow">
            <label className="checkboxLabel">
              <input
                type="checkbox"
                checked={options.outro}
                onChange={() => handleToggle("outro")}
              />
              <span className="checkboxSquare">{options.outro ? "✓" : ""}</span>
              Outro:
            </label>
            <input
              type="text"
              value={outroText}
              onChange={(e) => setOutroText(e.target.value)}
              disabled={!options.outro}
              className="input outroInput"
              placeholder="Descrição"
            />
          </div>
        </div>

        <div className="attachmentRow">
          <span className="attachmentLabel">Anexo(s) comprobatório(s)</span>
          <button
            type="button"
            className="attachmentButton"
            onClick={handleAddAttachment}
          >
            +
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default JustificativaFaltaContainer;
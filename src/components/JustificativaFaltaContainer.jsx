import { useState } from "react";
import "../App.css";

const justificativaOptions = [
  { field: "motivoSaude", label: "Motivo de saúde" },
  { field: "consulta", label: "Consulta / atendimento médico" },
  { field: "falecimento", label: "Falecimento de Familiar" },
  { field: "compromisso", label: "Compromisso institucional" },
];

const JustificativaFaltaContainer = () => {
  const [formData, setFormData] = useState({
    date: "",
    timeFrom: "",
    timeTo: "",
    outroText: "",
    attachments: 0,
    options: {
      motivoSaude: false,
      consulta: false,
      falecimento: false,
      compromisso: false,
      outro: false,
    },
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = (field) => {
    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [field]: !prev.options[field],
      },
    }));
  };



  const { date, timeFrom, timeTo, outroText, options } = formData;

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
              onChange={(e) => handleChange("date", e.target.value)}
              className="input"
            />
          </div>

          <div className="fieldRow horarioRow">
            <label htmlFor="horaInicio">Horário:</label>
            <input
              id="horaInicio"
              type="time"
              value={timeFrom}
              onChange={(e) => handleChange("timeFrom", e.target.value)}
              className="input inputSmall"
            />
            <span className="ateLabel">às:</span>
            <input
              type="time"
              value={timeTo}
              onChange={(e) => handleChange("timeTo", e.target.value)}
              className="input inputSmall"
            />
          </div>

          <div className="checkboxGroup">
            {justificativaOptions.map(({ field, label }) => (
              <label key={field} className="checkboxLabel">
                <input
                  type="checkbox"
                  checked={options[field]}
                  onChange={() => handleToggle(field)}
                />
                <span className="checkboxSquare">
                  {options[field] ? "✓" : ""}
                </span>
                {label}
              </label>
            ))}

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
                onChange={(e) => handleChange("outroText", e.target.value)}
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

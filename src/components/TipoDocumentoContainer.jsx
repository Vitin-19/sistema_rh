import "../App.css";

// exemplo de professor improvisado

const TipoDocumentoContainer = () => {

    return (
        <div>
            <header className="tituloTipo">
                <h1>TIPOS DE DOCUMENTO</h1>
            </header>

            <section className="TipoContainer1">
                <div className="container-botaoTipo">
                    <button className="botaoTipo"> Declaração de Comparecimento </button>
                </div>
                <div className="container-botaoTipo">
                    <button className="botaoTipo"> Declaração de Acúmulo </button>
                </div>
                <div className="container-botaoTipo">
                    <button className="botaoTipo"> Vínculo Funcional </button>
                </div>
            </section>
            <section className="TipoContainer2">
                <div className="container-botaoTipo">
                    <button className="botaoTipo"> Justificativa de Falta </button>
                </div>
                <div className="container-botaoTipo">
                    <button className="botaoTipo"> Alteração de Atribuição </button>
                </div>
            </section>
            
            <div className="container-voltar">
                <button className="voltar"> Voltar </button>
            </div>
        </div>
    );
};

export default TipoDocumentoContainer;
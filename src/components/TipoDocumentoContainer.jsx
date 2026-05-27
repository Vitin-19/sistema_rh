import "../App.css";

// exemplo de professor improvisado

const TipoDocumentoContainer = () => {

    return (
        <div>
            <header className="tituloTipo">
                <h1>TIPOS DE DOCUMENTO</h1>
            </header>

            <section className="TipoContainer">
                <div className="container-botao">
                    <button className=""> Abrir chamado </button>
                </div>
            </section>
            
            <div className="container-botao">
                <button className="abrir-chamado"> Abrir chamado </button>
            </div>
        </div>
    );
};

export default TipoDocumentoContainer;
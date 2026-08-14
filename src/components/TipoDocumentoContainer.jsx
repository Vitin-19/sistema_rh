import { useNavigate } from "react-router-dom";

const TipoDocumentoContainer = () => {

    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div className="page-wrapper">
            <header className="tituloTipo">
                <h1>TIPOS DE SOLICITAÇÕES</h1>
            </header>

            <div className="conteudo-central">
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
            </div>
            
            <div className="container-voltar">
                <button className="voltar" onClick={handleVoltar}>
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default TipoDocumentoContainer;
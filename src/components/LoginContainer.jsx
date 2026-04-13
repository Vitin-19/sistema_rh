import { useState } from "react"
import "../App.css"

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [etecNumber, setEtecNumber] = useState();

    return(
        <div className="loginContainer">
            <header className="title">
                <h1>Login</h1>
            </header>
            <form>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                    placeholder="E-mail"
                    required
                    className="input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(p) => setPassword(p)}
                    placeholder="Senha"
                    required
                    className="input"
                />
                <input
                    type="number"
                    value={etecNumber}
                    onChange={(e) => setEtecNumber(e)}
                    required
                    className="input"
                />
            </form>
        </div>
    )
}

export default LoginContainer;
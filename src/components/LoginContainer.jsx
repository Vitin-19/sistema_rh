import { useState } from "react";
import "../App.css";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [etecCode, setEtecCode] = useState();
  const [loginType, setLoginType] = useState("");

  return (
    <div className="loginContainer">
      <header className="title">
        <h1>Login</h1>
      </header>
      <section 
        onChange={(lt) => setLoginType(lt.target.value)}
      >
        <form className="loginForm">
          <div className="formRow">
            <div className="inputContainer">
              <label htmlFor="loginTypes">Entrar Como:</label>
              <select name="loginTypes" id="loginTypes" className="input">
                <option value="teacher" className="input">
                  PROFESSOR
                </option>
                <option value="secretary" className="input">
                  SECRETARIA
                </option>
              </select>
            </div>

            <div className="inputContainer">
              <label htmlFor="etecCode">Código da Etec:</label>
              <input
                type="number"
                value={etecCode}
                onChange={(ec) => setEtecCode(ec.target.value)}
                required
                className="input"
                id="etecCode"
              />
            </div>
          </div>

          <div className="formRow">
            <div className="inputContainer">
                <label htmlFor="login">Login:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
                id="login"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="password">Senha:</label>
                <input
                type="password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
                required
                className="input"
                id="password"
                />
            </div>
          </div>

          <div className="formRow">
            <input type="submit" value="ENTRAR" id="submit"/>
          </div>
        </form>
      </section>
      <footer className="footer">
        <p>© Sistema - Desde 2026</p>
      </footer>
    </div>
  );
};

export default LoginContainer;

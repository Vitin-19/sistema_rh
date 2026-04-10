import { useState } from "react"

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return(
        <div>
            <h1>Login</h1>
            <input 
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="E-mail"
                required
            />
            <input
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Password"
                required
            />
        </div>
    )
}

export default LoginContainer;
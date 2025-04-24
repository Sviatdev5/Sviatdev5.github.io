import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register () {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email,password);
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Реєстрація</h2>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
         </div>
         <div className="form-group button-container full-width">
        <button type="submit">Увійти</button>
      </div>
        <p>
          Маєте акаунт?{" "}
          <span onClick={() => navigate("/login")} className="switch-link">
            Увійти
          </span>
        </p>
      </form>
    </div>
    );
}
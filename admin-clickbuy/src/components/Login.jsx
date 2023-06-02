import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin đăng nhập");
      return;
    } else if (email === "admin@1" && password === "admin@2") {
      navigate("./admin");
    } else {
      // Sai email hoặc password
      setErrorMessage("Email hoặc mật khẩu không đúng");
    }
  };
  return (
    <div>
      <div className="image">
        <img src="https://cdn.pixabay.com/photo/2021/08/02/05/17/sunflower-6515860_1280.jpg" />
        <div className="register-form">
          <div className="form-signin w-100 m-auto">
            <form className="login" id="login" onSubmit={handleLogin}>
              <br />
              <div className="form-floating">
                <label htmlFor="floatingInput">Email </label>
                <br />
                <input              
                  type="email"
                  className="form-control mail"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-floating">
                <label htmlFor="floatingPassword">Mật khẩu</label>
                <br />
                <input
                  type="password"
                  className="form-control pass"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                style={{ padding: "10px", borderRadius: "10px" }}
                className="w-100 btn btn-lg btn-primary btn-danger"
                type="submit"
              >
                Đăng Nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

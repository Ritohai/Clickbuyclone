import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Kiểm tra trường trống
    if (!email || !password) {
      // setErrorMessage("Vui lòng điền đầy đủ thông tin đăng nhập");
      swal("Oops!", "Vui lòng nhập đầy đủ thông tin!!!! :))", "error");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8000/user?email=${email}&password=${password}`
      );

      if (response.data.length > 0) {
        //ddien id use dang nhap
        localStorage.setItem("userLogin", JSON.stringify(response.data[0]));
        alert("Đăng nhập thành công!");
      // swal("Oops!", "Đăng nhập thành công!!!! :))", "success");

        navigate("/");

        window.location.reload();
      } 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="register-form">
        <div className="form-signin w-100 m-auto">
          <form className="login" id="login" onSubmit={handleLogin}>
            <div className="log-btn mb-2">
              <button style={{ padding: "10px", borderRadius: "10px" }}>
                <Link to="/register" id="in">
                  Đăng ký
                </Link>
              </button>
              <button style={{ padding: "10px", borderRadius: "10px" }}>
                <Link to="/login" id="reg">
                  Đăng Nhập
                </Link>
              </button>
            </div>
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
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Lưu mật
                khẩu
              </label>
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
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;

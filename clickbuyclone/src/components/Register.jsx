import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeDob = (e) => {
    setDob(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra các trường input có đầy đủ thông tin
    if (password.includes(" ")) {
      alert("Không được để khoảng trắng trong mật khẩu");
      return;
    }

    if (
      name == "" ||
      email == "" ||
      password == "" ||
      address == "" ||
      dob == "" ||
      phone == "" ||
      gender == ""
    ) {
      swal("Oops!", "Vui lòng nhập đầy đủ thông tin!!!! :))", "error");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8000/user");
      const users = response.data;

      if (users && users.some((user) => user.email === email)) {
        alert("Email đã được đăng ký trước đó");
        console.log(users);
      } else {
        const userData = {
          name: name,
          email: email,
          password: password,
          address: address,
          dob: dob,
          phone: phone,
          gender: gender,
        };
        await axios.post("http://localhost:8000/user", userData);
        await axios.post("http://localhost:8000/cart", { namephone: [] });

        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="register-form">
      {/*Register*/}
      <Form className="row g-3 register" onSubmit={(e) => handleSubmit(e)}>
        <div className="log-btn">
          <button style={{ padding: "10px", borderRadius: "10px" }}>
            {" "}
            <Link to="/register" id="in">
              Đăng ký
            </Link>{" "}
          </button>
          <button style={{ padding: "10px", borderRadius: "10px" }}>
            <Link to="/login" id="reg">
              Đăng Nhập
            </Link>
          </button>
        </div>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Tên
          </label><br/>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label><br/>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            Mật Khẩu
          </label><br/>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            minLength={8}
            placeholder="Tối thiểu 8 ký tự"
            value={password}
            onChange={(e) => handleChangePass(e)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Địa chỉ
          </label><br/>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={address}
            onChange={(e) => handleChangeAddress(e)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputDob" className="form-label">
            Ngày tháng năm sinh
          </label><br/>
          <input
            type="date"
            style={{height: "40px", borderRadius:"5px", backgroundColor:"#f0f0f0", border:"0px solid "}}
            className="form-control"
            id="inputDob"
            value={dob}
            onChange={(e) => handleChangeDob(e)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Số điện thoại
          </label><br/>
          <input
            type="tel"
            style={{height: "40px", borderRadius:"5px", backgroundColor:"#f0f0f0",border:"0px solid "}}
            className="form-control"
            id="inputPhone"
            name="phone"
            pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{3}"
            placeholder="0xxxxxxxxx"
            value={phone}
            onChange={(e) => handleChangePhone(e)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputGender" className="form-label">
            Giới tính
          </label>
          <select
            id="inputGender"
            className="form-select"
            value={gender}
            onChange={(e) => handleChangeGender(e)}
          >
            <option defaultValue="">Chọn...</option>
            <option value="nam">Nam</option>
            <option value="nu">Nữ</option>
          </select><br/>
        </div>
        <div className="col-12" style={{marginTop:"20px"}}>
          <button
            type="submit"
            className="btn btn-primary btn-danger"
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            Đăng ký
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Register;

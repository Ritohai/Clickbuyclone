import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Header() {
  // console.log(useLogin);
  const navigate = useNavigate();
  let useLogin = JSON.parse(localStorage.getItem("userLogin"));
  useEffect(() => {
    if (useLogin == -1) {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
      navigate("/login");
    }
  }, [useLogin]);
  //kết thúc check đăng nhập
  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };

  return (
    <header>
      <div className="container">
        <div className="dflex">
          <div className="logo">
            <a href="http://localhost:3000">
              <img src="https://clickbuy.com.vn/clickbuy-aar.png" alt="" />
            </a>
          </div>
          <div className="search">
            <input type="search" placeholder="Tìm kiếm" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="location">
            <select name="location">
              <option value="mb">Khu Vực Miền Bắc</option>
              <option value="mn">Khu Vực Miền Nam</option>
            </select>
          </div>
          <div className="phone">
            <a className="header-phone" href="tel:0123456789">
              {" "}
              <i className="fa-solid fa-phone fa-beat-fade" />
              <p>
                Gọi mua hàng <br /> 19001000
              </p>{" "}
            </a>
          </div>
          <div className="cart">
            <Link className="header-cart" to="/cart">
              <i className="fa-solid fa-cart-shopping" />{" "}
              <p>
                Chi tiết <br /> giỏ hàng
              </p>
            </Link>
          </div>
          <div className="policy">
            <a href="#" className="header-policy">
              <i className="fa-solid fa-shield-halved" />
              <p>
                Chính sách <br /> bảo hành
              </p>
            </a>
          </div>
          <div className="policy">
            <a href="#" className="header-policy">
              <i className="fa-solid fa-user"></i>
              {useLogin == null ? (
                <>
                  <Link to={"/login"}>
                    <span style={{ color: "white" }}>Đăng nhập/</span>
                  </Link>
                  <Link to={"/register"}>
                    <span style={{ color: "white" }}>Đăng kí</span>
                  </Link>{" "}
                </>
              ) : (
                <div>
                  {useLogin.name}/
                  <div>
                    <span style={{ color: "white" }} onClick={handleLogout}>
                      Đăng xuất
                    </span>
                  </div>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

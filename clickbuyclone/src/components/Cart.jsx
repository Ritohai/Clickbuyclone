import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Cart() {
  const [cart, setCart] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem("userLogin"));
  const [cartInfor, setCartInfor] = useState({});
  const loadCart = async () => {
    const result = await axios.get(`http://localhost:8000/cart/${dataUser.id}`);
    setCart(result.data.namephone);
  };
  // tăng số lượng
  const handlePlus = (i) => {
    const upCount = [...cart];
    upCount[i].count += 1;
    setCart(upCount);
    axios.patch(`http://localhost:8000/cart/${dataUser.id}`, {
      namephone: upCount,
    });
    axios
      .get(`http://localhost:8000/cart/${useLogin.id}`)
      .then((response) => setCartInfor(response.data.namephone));
    loadCart();
  };

  // giảm số lượng
  const handleMinus = (i) => {
    const downCount = [...cart];

    if (downCount[i].count > 1) {
      downCount[i].count -= 1;
    } else {
      downCount.splice(i, 1);
    }
    setCart(downCount);
    axios.patch(`http://localhost:8000/cart/${dataUser.id}`, {
      namephone: downCount,
    });
    axios
      .get(`http://localhost:8000/cart/${useLogin.id}`)
      .then((response) => setCartInfor(response.data.namephone));
    loadCart();
  };

  console.log(cartInfor);
  const { id } = useParams("id");
  const useLogin = JSON.parse(localStorage.getItem("userLogin"));
  const handleClick = () => {
    if (useLogin == null) {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
      navigate("/login");
    } else {
      swal("Oops!", "Đặt hàng thành công  !!!! :))","success");
    }
  };

  //Total
  function totalProduct() {
    let sum = 0;
    cartInfor.forEach((e) => {
      sum += e.price * e.count;
    });
    return sum;
  }

  // Delete sản phẩm
  const handleDelete = (i) => {
    const updatedCart = [...cart]; // Tạo một bản sao mới của mảng cart
    // Xóa sản phẩm khỏi giỏ hàng
    updatedCart.splice(i, 1);

    setCart(updatedCart); // Cập nhật lại giá trị cart
    axios.patch(`http://localhost:8000/cart/${dataUser.id}`, {
      namephone: updatedCart,
    });
    axios
      .get(`http://localhost:8000/cart/${useLogin.id}`)
      .then((response) => setCartInfor(response.data.namephone));
    loadCart();
  };

  function totalProduct() {
    let sum = 0;
    cart.forEach((e) => {
      sum += e.price * e.count;
    });
    return sum;
  }

  // tổng tiền
  function compar() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].count * cart[i].price;
    }
    return sum;
  }

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/cart/${useLogin.id}`)
      .then((response) => setCartInfor(response.data.namephone));
    loadCart();
    compar();
  }, [id]);
  // const total = count * cartInfor.price;

  return (
    <div className="container">
      <div className="information-user">
        <h3>Thông tin giỏ hàng</h3>
        <table>
          <thead style={{ backgroundColor: "#f1f1f1", textAlign: "center" }}>
            <tr>
              <th>STT</th>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {cartInfor.length
              ? cartInfor.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <p> {e.namephone}</p>
                      <p>Black</p>
                      <p>Khu vực: Miền Bắc</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button onClick={() => handleMinus(i)}>
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <span>{e.count}</span>
                      <button onClick={() => handlePlus(i)}>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </td>
                    <td>{e.price}đ</td>
                    <td style={{ textAlign: "center" }}>
                      <button onClick={() => handleDelete(i)}>
                        <i class="fa-solid fa-x"></i>
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
            <tr>
              <th colSpan={4}>Tổng</th>
              <th> {compar().toString()}đ</th>
            </tr>
          </tbody>
        </table>
        <div className="pay">
          <div>
            <input
              style={{ width: "30px", height: "20px" }}
              type="radio"
              name="#"
            />
            Chuyển khoản ngân hàng
          </div>
          <div>
            <input
              style={{ width: "30px", height: "20px" }}
              type="radio"
              name="#"
            />
            Trả tiền mặt khi nhận hàng
          </div>
          <hr />
          <p>
            Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng của
            bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web và cho các
            mục đích khác được mô tả trong chính sách riêng tư của chúng tôi.
          </p>
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "red",
              color: "white",
              width: "100px",
              height: "30px",
              borderRadius: "10px",
            }}
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

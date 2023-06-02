import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function AdminPhone() {
  //render thông tin người đăng kí
  const [users, setUssers] = useState([]);
  const loadUsers = async () => {
    const resuleUsers = await axios.get("http://localhost:8000/user");
    setUssers(resuleUsers.data);
    console.log(resuleUsers);
  };

    //phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
  
    // Tính chỉ số của item cuối cùng trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    // Tính chỉ số của item đầu tiên trên trang hiện tại
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Lấy danh sách sản phẩm trên trang hiện tại
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  
    // Hàm chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(users.length / itemsPerPage);
    const pageNumbers = [];
    
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <div className="image">
        <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-dep.jpg" />
        <div className="container table">
          <Link to="/listsp">
            <Button style={{backgroundColor:"green",color:"white", padding:"5px",borderRadius:"5px"}} variant="primary">Thông tin sản phẩm</Button>
          </Link>
          <Link to="/">
            <Button style={{backgroundColor:"red",color:"white", padding:"5px",borderRadius:"5px"}} variant="primary">Đăng xuất</Button>
          </Link>
          <div className="cart">
            <h3>Giỏ hàng</h3>
            <table border={1} width={"100%"}>
              <thead>
                <tr>
                  <th>Xóa</th>
                  <th>Sản phẩm</th>
                  <th>Tổng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-x"></i>
                  </td>
                  <td>
                    <p> iPhone 14 Pro Max 128GB chính hãng VNA - Space</p>
                    <p>Black × 1</p>
                    <p>Khu vực: Miền Nam</p>
                  </td>
                  <td>26,690,000 đ</td>
                </tr>
                <tr>
                  <th colSpan={2}>Tạm tính</th>
                  <td>26,690,000 đ</td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    Chọn gói bảo hành - Bảo hành chính hãng 12 tháng
                  </th>
                  <td>0 đ</td>
                </tr>
                <tr>
                  <th colSpan={2}>Tổng</th>
                  <td>26,690,000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="informationuser">
            <h3>Thông tin người sử dụng</h3>
            <table border={1}>
              <thead>
                <tr>
                  <th>Họ và tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  {/* <th>Trạng thái</th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((e, i) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    {/* <td>
                  <select name="" id="">
                    <option>0</option>
                    <option>1</option>
                  </select>
                </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <ul>
                {pageNumbers.map((number) => (
                  <li key={number}>
                    <a
                      onClick={() => paginate(number)}
                      className={currentPage === number ? "active" : ""}
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPhone;

// console.log(useLogin);
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ListSp() {
  //render sản phẩm
  const [phone, setPhone] = useState([]);
  const loadPhone = async () => {
    const result = await axios.get("http://localhost:8000/phone");
    setPhone(result.data);
    // console.log(result.data);
  };

  // Add sản phẩm
  const [products, setProducts] = useState({
    category: "",
    namephone: "",
    image: "",
    price: "",
    rate: "",
    image1: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
    console.log(products);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/phone", products);
    navigate("/listsp");
    window.location.reload();
  };

  const [check, setCheck] = useState(false);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/phone/${id}`);
    setCheck(!check);
  };

  //phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Tính chỉ số của item cuối cùng trên trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  // Tính chỉ số của item đầu tiên trên trang hiện tại
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Lấy danh sách sản phẩm trên trang hiện tại
  const currentItems = phone.slice(indexOfFirstItem, indexOfLastItem);

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(phone.length / itemsPerPage);
  const pageNumbers = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    loadPhone();
  }, [check]);
  return (
    <div className="image">
      <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-dep.jpg" />
      <div className="container table">
        <Link to="/admin">
          <button style={{backgroundColor:"green",color:"white", padding:"5px",borderRadius:"5px"}}>Thông tin người dùng</button>
        </Link>
        <Link to="/">
          <button style={{backgroundColor:"red",color:"white", padding:"5px",borderRadius:"5px"}}>Đăng xuất</button>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="addphone">
            <h3>Thêm sản phẩm </h3>
            <table border={1} width={"100%"}> 
              <thead>
                <tr>
                  <th>Hãng</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh minh họa</th>
                  <th>Giá</th>
                  <th>Đánh giá</th>
                  <th>Ảnh thông tin</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select type="text" name="category" onChange={handleChange}>
                      <option value="samsung">samsung</option>
                      <option value="iphone">iphone</option>
                      <option value="xiaomi">xiaomi</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="namephone"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input type="text" name="image" onChange={handleChange} />
                  </td>
                  <td>
                    <input type="text" name="price" onChange={handleChange} />
                  </td>
                  <td>
                    <input type="text" name="rate" onChange={handleChange} />
                  </td>
                  <td>
                    <input type="text" name="image1" onChange={handleChange} />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button variant="primary" type="submit">
                      <i class="fa-sharp fa-solid fa-plus"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Sản phẩm đã thêm</h3>
            <table border={1} width={"100%"}>
              <thead>
                <tr>
                  <th>Hãng</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh minh họa</th>
                  <th>Giá</th>
                  <th>Đánh giá</th>
                  <th>Ảnh thông tin</th>
                  <th colSpan={2}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((e, i) => (
                  <tr key={i}>
                    <td>{e.category}</td>
                    <td>{e.namephone}</td>
                    <td>
                      <img src={e.image} />
                    </td>
                    <td>{e.price}</td>
                    <td>{e.rate}</td>
                    <td>
                      <img src={e.image1} />
                    </td>
                    <td>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </td>
                    <td onClick={() => handleDelete(e.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </td>
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
        </form>
      </div>
    </div>
  );
}

export default ListSp;

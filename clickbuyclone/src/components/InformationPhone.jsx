import React, { useEffect } from "react";
import { Rate } from "antd";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function InformationPhone() {
  const useLogin = JSON.parse(localStorage.getItem("userLogin"));
  console.log(useLogin);
  const [buy, setBuy] = useState([]);
  const [status, setStatus] = useState(false);

  const [value, setValue] = useState(3);
  const [infor, setInfor] = useState({});
  const { id } = useParams("id");

  // buy sp
  const [product, setProduct] = useState([]);
  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8000/phone");
    setProduct(result.data);
  };
  const handleBuy = async () => {
    console.log(infor);
    let newBuy = [...buy];
    let check = -1;
    for (let i = 0; i < newBuy.length; i++) {
      if (infor.id === newBuy[i].id) {
        check = i;
      }
    }
    if (check > -1) {
      newBuy[check].count += 1;
    } else {
      newBuy.push({ ...infor, count: 1 });
    }
    axios.patch(`http://localhost:8000/cart/${useLogin.id}`, {
      namephone: newBuy,
    });

  };

  // Render
  useEffect(() => {
    // console.log(id);
    fetch(`http://localhost:8000/phone/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfor(data);
        // console.log(data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
    loadProducts();
    axios
      .get(`http://localhost:8000/cart/${useLogin.id}`)
      .then((response) => setBuy(response.data.namephone));
  }, [status, id]);

  return (
    <>
      <div className="container">
        <nav className="information-phone">
          <div className="rate-phone">
            <h3>{infor.namephone}</h3>
            {/* <div className="rate">
              <Rate onChange={setValue} value={infor.rate} />
            </div> */}
          </div>
          <div className="button-phone">
            <button className="a">
              <i className="fa-solid fa-thumbs-up"></i> Like 24
            </button>
            <button>Share</button>
          </div>
        </nav>
        <div className="list-offical">
          <div className="main-phone">
            <div className="image">
              <img src={infor.image} />
              <div className="image-small">
                <div className="small-image">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/c5987a3b-12b5-40bb-9cf6-30cec91b2d6d.jpg" />
                </div>
                <div className="small-image">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/thumbnail-2.jpg" />
                </div>
                <div className="small-image">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/thumbnail-3.jpg" />
                </div>
                <div className="small-image">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/e4770c0d-83cb-4617-a4c4-82f7d7002f13.png" />
                </div>
                <div className="small-image">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/e15604db-4e8f-45e3-9eb2-89ce2eff96d4.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="price-phone">
            <p>Giá: {infor.price} đ</p>
            <p>
              <i class="fa-solid fa-palette"></i> Màu sắc
            </p>
            <div className="color-phone">
              <div className="btn-img">
                <div>
                  <img src={infor.imagesmall1} />
                </div>
                <div>
                  <p>Aura Black</p>
                  <p>{infor.price} đ</p>
                </div>
              </div>
              <div className="btn-img">
                <div>
                  <img src={infor.imagesmall2} />
                </div>
                <div>
                  <p>Green</p>
                  <p>{infor.price} đ</p>
                </div>
              </div>
              <div className="btn-img">
                <div>
                  <img src={infor.imagesmall3} />
                </div>
                <div>
                  <p>Cream</p>
                  <p>{infor.price} đ</p>
                </div>
              </div>
              <div className="btn-img">
                <div>
                  <img src={infor.imagesmall4} />
                </div>
                <div>
                  <p>Lavender</p>
                  <p>{infor.price} đ</p>
                </div>
              </div>
            </div>
            <div className="information-store gift">
              <div className="gift-info" style={{color:"white"}}>
                <i class="fa-solid fa-gift"></i> Khuyến mãi
              </div>
              <ul>
                <tr>
                  KM1:
                  <p>
                    Tặng tai nghe Samsung Galaxy Buds 2 trị giá 2.990.000đ
                    (không lấy quà giảm ngay 1 triệu đồng)
                  </p>
                </tr>
                <tr>
                  KM2:
                  <p>
                    Bốc thăm trúng thưởng Xe máy Honda Vision, điện thoại
                    Samsung A34, 3 chỉ vàng 9999 và nhiều quà tặng giá trị khác
                    ( xem chi tiết)
                  </p>
                </tr>
                <tr>
                  KM3:
                  <p>Tặng ngay Lucky Box (số lượng có hạn)</p>
                </tr>
                <tr>
                  KM4:
                  <p>Ưu đãi phòng chờ hạng thương gia trị giá 900.000đ</p>
                </tr>
                <tr>
                  KM5:
                  <p>Free gói Microsoft Office 1.290.000</p>
                </tr>
              </ul>
            </div>
            <button onClick={handleBuy} >
              <Link to={`/cart/${infor.id}`} style={{color:"white"}}>MUA NGAY</Link>
            </button>
          </div>
          <div className="list-location">
            <div className="local dflex">
              <div className="local-tab active">
                <p>Khu Vực</p>
                <b>Miền Bắc</b>
              </div>
              <div className="local-tab">
                <p>Khu Vực</p>
                <b>Miền Trung</b>
              </div>
              <div className="local-tab">
                <p>Khu Vực</p>
                <b>Miền Nam</b>
              </div>
            </div>
            <div className="local-info active">
              <p>367 Cầu Giấy, Hà Nội. 0911.542.468</p>
              <p>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: 0976.73.2468</p>
              <p>446 Xã Đàn, Đống Đa, Hà Nội: 096.111.2468</p>
              <p>367 Cầu Giấy, Hà Nội. 0911.542.468</p>
              <p>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: 0976.73.2468</p>
              <p>446 Xã Đàn, Đống Đa, Hà Nội: 096.111.2468</p>
              <p>367 Cầu Giấy, Hà Nội. 0911.542.468</p>
              <p>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: 0976.73.2468</p>
              <p>446 Xã Đàn, Đống Đa, Hà Nội: 096.111.2468</p>
            </div>
            <div className="local-info">
              <p>161 Hàm Nghi, Q.Thanh Khê, TP.Đà Nẵng: 0799.101.799</p>
            </div>
            <div className="local-info">
              <p>
                379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM: 0984.768.260 |
                028.66.845.057
              </p>
              <p>42 Trần Quang Khải ,P.Tân Định, Quận 1, HCM: 0968.371.357</p>
              <p>499 Nguyễn Thị Thập, Q.7, HCM: 0964.75.0268</p>
              <p>466 Quang Trung, P.10, Q.Gò Vấp, HCM: 082.639.2468</p>
              <p>
                379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM: 0984.768.260 |
                028.66.845.057
              </p>
              <p>42 Trần Quang Khải ,P.Tân Định, Quận 1, HCM: 0968.371.357</p>
              <p>499 Nguyễn Thị Thập, Q.7, HCM: 0964.75.0268</p>
              <p>466 Quang Trung, P.10, Q.Gò Vấp, HCM: 082.639.2468</p>
              <p>
                379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM: 0984.768.260 |
                028.66.845.057
              </p>
              <p>42 Trần Quang Khải ,P.Tân Định, Quận 1, HCM: 0968.371.357</p>
              <p>499 Nguyễn Thị Thập, Q.7, HCM: 0964.75.0268</p>
              <p>466 Quang Trung, P.10, Q.Gò Vấp, HCM: 082.639.2468</p>
            </div>
            <div>
              <div>
                <i class="fa-solid fa-headset"></i> Đăng kí để được tư vấn
              </div>
              <input type="text" />
              <button style={{ width: "30px", height: "40px",borderRadius:"5px",backgroundColor:"red",color:"white" }}>Gửi</button>
              <ul>
                <tr>
                  <i class="fa-solid fa-phone"></i>Gọi 1900.63.39.09 hoặc
                  0977.649.939 để được tư vấn (Từ 8:00-21:00)
                </tr>
                <tr>
                  <i class="fa-solid fa-phone"></i>Gọi 0866.77.9177 để được tư
                  vấn trả góp
                </tr>
                <tr>
                  <i class="fa-solid fa-phone"></i>Gọi 0799.101.799 để được tư
                  vấn (Hotline Đà Nẵng)
                </tr>
              </ul>
            </div>
          </div>
        </div>
        <div className="infor-phone">
          <div>
            <div>
              <div className="infor">
                <p>{infor.inforphone1}</p>
                <img src={infor.image1} />
                <p>{infor.inforphone2}</p>
                <img src={infor.image2} />
                <p>{infor.inforphone3}</p>
                {/* <p>
                  Màn hình chất lượng hiển thị rõ nét và chân thật Màn hình của
                  điện thoại có thước 6.8 inch cùng với tấm nền Dynamic AMOLED
                  2X có khả năng hiển thị hình ảnh một cách chân thật và rực rỡ,
                  mang đến cho người dùng không gian màn ảnh rộng chỉ trong tầm
                  tay – thỏa sức trải nghiệm.
                </p>
                <img src={infor.image3} /> */}
                {/* <p>
                  Màn hình trên Galaxy S23 Ultra được đánh giá là xuất sắc, rõ
                  nét với độ phân giải QHD+ (3088 x 1400 Pixels), hỗ trợ tần số
                  quét 120 Hz cho người dùng trải nghiệm xem phim, hay chơi game
                  và lướt web,… vô cùng mượt mà.
                  <b> Bắt trọn từng khoảnh khắc với camera 200 MP chất lượng</b>
                  cao Galaxy S23 Ultra được trang bị camera chính có độ phân
                  giải lên đến 200 MP cùng với đó là một ống kính tele 10 MP với
                  khả năng zoom quang học 10X, một ống kính tele 10 MP với khả
                  năng zoom quang học 3X và cuối cùng là một camera góc siêu
                  rộng độ phân giải 12 MP.
                </p>
                <p>
                  Bộ vi xử lý Snapdragon 8 Gen 2 với hiệu năng đầu Là một trong
                  những flagship hàng đầu giới điện thoại Androi vì thế không có
                  gì đáng ngạc nhiên khi Galaxy S23 Ultra sở hữu hiệu năng mạnh
                  mẽ từ bộ vi xử lý Snapdragon 8 Gen 2 được sản xuất trên tiến
                  trình 4 nm hiện đại. Đây cũng là một trong những chiến lược
                  hợp tác giữa Samsung và Qualcomm nhằm mang đến trải nghiệm
                  hiệu năng mạnh mẽ cho người dùng khi sử dụng Galaxy S23 Ultra
                  5G 512 GB và các thiết bị khác thuộc dòng Galaxy S23.
                </p>
                <img src="https://clickbuy.com.vn/uploads/2023/02/328840302_495219462785630_7809273247012097507_n.jpg" />
                <p>
                  <b>
                    Dung lượng pin lớn đáp ứng mọi nhu cầu cho ngày dài làm việc
                    và giải trí
                  </b>
                  Về dung lượng pin thì chiếc điện thoại này được trang bị viên
                  pin 5000 mAh và hỗ trợ sạc nhanh 45 W. Galaxy S23 Ultra vẫn có
                  thể trụ được trên tục loanh quanh 8 tiếng và chỉ cần khoảng 1
                  giờ là sạc đầy, đáp ứng được nhu cầu sử dụng gần cả một ngày
                  cho người dùng mà không lo bị gián đoạn công việc hay giải trí
                  xem phim, lướt web, đọc báo, chơi game,…
                </p> */}
                {/* <img src="https://clickbuy.com.vn/uploads/2023/02/328265815_939841647388581_4802501508831469566_n.jpg" /> */}
              </div>
            </div>
            <div className="comment">
              <h3>Đánh giá & Nhận xét {infor.namephone}</h3>
              <div style={{ textAlign: "center" }}>
                <div>Hãy cho chúng tôi biết ý kiến của bạn!</div>
                <button
                  style={{
                    width: "100px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px",
                    borderRadius: "10px ",
                  }}
                >
                  Gửi đánh giá
                </button>
              </div>
              <p>
                Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                buộc được đánh dấu *
              </p>
              <p>Đánh giá của bạn *</p>
              <div className="rate">
                <Rate onChange={setValue} value={value} />
              </div>
              <p>Nhận xét của bạn *</p>
              <textarea type="text" style={{ width: "700px" }} />
              <div>
                <input type="text" placeholder="Tên" style={{ width: "50%" }} />
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: "50%" }}
                />
              </div>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  width: "100px",
                  padding: "5px",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              >
                Gửi đi
              </button>
            </div>
          </div>
          {/* <div>
            <h3 style={{ textAlign: "center" }}>Thông số kỹ thuật</h3>
            <div className="infof">
              <table>
                <tbody>
                  <tr>Bộ nhớ trong</tr>
                  <tr>RAM</tr>
                  <tr>CPU</tr>
                  <tr>Camera chính</tr>
                  <tr>Camera phụ </tr>
                  <tr>Độ phân giải màn hình</tr>
                  <tr>Kích thước màn hình</tr>
                  <tr>Màu sắc</tr>
                  <tr>Dung lượng pin</tr>
                  <tr>Sạc nhanh</tr>
                  <tr>Tình trạng SP</tr>
                  <tr>Thương hiệu</tr>
                </tbody>
                <tbody>
                  <tr>256 GB</tr>
                  <tr>8GB</tr>
                  <tr>Qualcomm SM8550 Snapdragon 8 Gen 2 (4 nm)</tr>
                  <tr>200MP – 10MP – 10MP</tr>
                  <tr>12MP</tr>
                  <tr>1440 x 3088 pixels (QHD+)</tr>
                  <tr>6.8 inches</tr>
                  <tr>Aura Black, Cream, Lavender, Sky Blue, Green, Red</tr>
                  <tr>5000 mAh</tr>
                  <tr>Sạc nhanh 25W</tr>
                  <tr>new</tr>
                  <tr>Samsung</tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
      ;
    </>
  );
}

export default InformationPhone;

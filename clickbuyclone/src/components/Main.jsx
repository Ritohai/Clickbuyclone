import React, { useEffect } from "react";
import CardSamsung from "./card/CardSamsung";
import CardIphone from "./card/CardIphone";
import CardXiaomi from "./card/CardXiaomi";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


function Main() {
  const navigate = useNavigate();
  let useLogin = localStorage.getItem("userLogin");
  console.log(useLogin);
  useEffect(() => {
    if (useLogin == null) {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
      navigate("/login");
    }
  }, [useLogin]);
  return (
    <main>
      <div className="container">
        <p className="infomation">
          KHAI TRƯƠNG CỬA HÀNG 367 CẦU GIẤY, HÀ NỘI – 300 SUẤT GIẢM GIÁ SIÊU SỐC
        </p>
        <div className="sidebar dflex">
          <div className="side-left">
            <ul className="list-product">
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Điện Thoại</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <Link to="/listiphone">iPhone</Link>
                      </li>
                      <li>
                        <Link to="/listsamsung">SamSung</Link>
                      </li>
                      <li>
                        <Link to="/listxiaomi">Xiaomi, Oppo</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Iphone 14</a>
                      </li>
                      <li>
                        <a href="#">Iphone 13</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>IPhone</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <Link to="/listiphone">iPhone</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Iphone 14</a>
                      </li>
                      <li>
                        <a href="#">Iphone 13</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Sam Sung</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <Link to="/listsamsung">SamSung</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Samsung S23 Ultra</a>
                      </li>
                      <li>
                        <a href="#">Samsung S23 </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Hãng khác</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <Link to="/listxiaomi">Oppo,Xiaomi</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Xiaomi 13 Pro</a>
                      </li>
                      <li>
                        <a href="#">Xiaomi Redmi K50 Ultra</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Laptop</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <a href="#">iPhone</a>
                      </li>
                      <li>
                        <a href="#">SamSung</a>
                      </li>
                      <li>
                        <a href="#">Xiaomi</a>
                      </li>
                      <li>
                        <a href="#">Oppo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Iphone 14</a>
                      </li>
                      <li>
                        <a href="#">Iphone 13</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="drop">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Đồng hồ</span>
                </a>
                <div className="dropdown dflex">
                  <div className="brand-select col">
                    <h4>Chọn Hãng</h4>
                    <ul>
                      <li>
                        <a href="#">iPhone</a>
                      </li>
                      <li>
                        <a href="#">SamSung</a>
                      </li>
                      <li>
                        <a href="#">Xiaomi</a>
                      </li>
                      <li>
                        <a href="#">Oppo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="price-select col">
                    <h4>Chọn theo giá</h4>
                    <ul>
                      <li>
                        <a href="#">1 triệu tới 3 triệu </a>
                      </li>
                      <li>
                        <a href="#">3 triệu tới 5 triệu </a>
                      </li>
                    </ul>
                  </div>
                  <div className="phone-select col">
                    <h4>Điện thoại hot</h4>
                    <ul>
                      <li>
                        <a href="#">Iphone 14</a>
                      </li>
                      <li>
                        <a href="#">Iphone 13</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Hàng cũ</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Thu cũ</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Phụ kiện</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Sửa chữa</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Tin công nghệ</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/icon-phone-red.svg" />
                  <span>Góc thủ thuật</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="slider">
              <a href="#" className="content-slider">
                {" "}
                <img src="https://clickbuy.com.vn/uploads/2023/04/slide-chao-he-2023-quay-vong-quay-trung-thuong-01-1.png" />
              </a>
              <a href="#">
                {" "}
                <img src=" https://clickbuy.com.vn/uploads/2023/04/banner-website.png" />
              </a>
              <a href="#">
                {" "}
                <img src=" https://clickbuy.com.vn/uploads/2023/05/slide-tung-bung-mung-khai-truong-01-2.png" />
              </a>
            </div>
            {/* <Slide/> */}
            <a href="#">
              <img src="https://clickbuy.com.vn/uploads/2023/05/1920x350-tung-bung-mung-khai-truong-01.png" />
            </a>
          </div>
          <div className="side-right">
            <p>Khuyến mãi nổi bật</p>
            <div className="info">
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2023/04/S23ULTRA.png" />
              </a>
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2023/05/Redmi-Note-12-Turbo.png" />
              </a>
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2023/05/bpl-sieu-bao-khuyen-mai-01.png" />
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="flash-sale">
            <a href="#">
              <img src="https://clickbuy.com.vn/assets/home/flash-sale-moi-ngay.png" />
            </a>
            <div className="slider-sale">
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/ava-s22ultra-scream.png" />
                  <p className="name-product">Samsung S23 Ultra</p>
                  <p className="price " style={{color:"black"}}>
                    23,990,000 <sup>d</sup>
                  </p>
                  <p>
                    Tặng tai nghe Samsung Galaxy Buds 2 trị giá 2.990.000đ
                    (không lấy quà giảm ngay 1 triệu đồng)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2023/02/ava-s23-scream.png" />
                  <p className="name-product">Samsung S23</p>
                  <p className="price" style={{color:"black"}}>
                    16,990,000 <sup>d</sup>
                  </p>
                  <p>
                    Tặng tai nghe Samsung Galaxy Buds 2 trị giá 2.990.000đ
                    (không lấy quà giảm ngay 1 triệu đồng)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/10/avt-apple-watch-se-trang.png" />
                  <p className="name-product">
                    Apple Watch Series SE 2022 GPS 40mm ( Gen 2) | Viền nhôm dây
                    cao su | Chính Hãng VN/A
                  </p>
                  <p className="price" style={{color:"black"}}>
                    5,990,000 <sup>d</sup>
                  </p>
                  <p>
                    [ 1/4-30/6] Bốc thăm trúng thưởng Xe máy Honda Vision, điện
                    thoại Samsung A34, 3 chỉ vàng 9999 và nhiều quà tặng giá trị
                    khác ( xem chi tiết)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/11/ava-k50-ultra.png" />
                  <p className="name-product">
                    Samsung Galaxy A54 (5G) 8Gb 256GB Chính Hãng
                  </p>
                  <p className="price" style={{color:"black"}}>
                    8,990,000 <sup>d</sup>
                  </p>
                  <p>
                    [ 1/4-30/6] Bốc thăm trúng thưởng Xe máy Honda Vision, điện
                    thoại Samsung A34, 3 chỉ vàng 9999 và nhiều quà tặng giá trị
                    khác ( xem chi tiết)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/Z-Fold-Phantom-black-640x640-1.png" />
                  <p className="name-product">
                    Samsung Galaxy Z Fold4 (5G) 12GB 512GB Chính hãng
                  </p>
                  <p className="price" style={{color:"black"}}>
                    30,990,000 <sup>d</sup>
                  </p>
                  <p>
                    Tặng tai nghe Samsung Galaxy Buds 2 trị giá 2.990.000đ
                    (không lấy quà giảm ngay 1 triệu đồng)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
              <div className="slide">
                <a href="#">
                  <img src="https://clickbuy.com.vn/uploads/2022/07/Z-Flip-Iconic-gold-640x640-1.png" />
                  <p className="name-product">
                    Samsung Galaxy Z Flip4 (5G) 256GB Chính hãng
                  </p>
                  <p className="price" style={{color:"black"}}>
                    17,490,000 <sup>d</sup>
                  </p>
                  <p>
                    [ 1/4-30/6] Bốc thăm trúng thưởng Xe máy Honda Vision, điện
                    thoại Samsung A34, 3 chỉ vàng 9999 và nhiều quà tặng giá trị
                    khác ( xem chi tiết)
                  </p>
                  <p>4sao</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="banner">
            <img src="https://clickbuy.com.vn/uploads/2023/05/1920x350-tung-bung-mung-khai-truong-01.png" />
          </div>
        </section>
        <section className="apple">
          <div className="title dflex">
            <h3>Apple - Authorised Reseller</h3>
            <ul className="apple-list list-right dflex">
              <li>
                <a href="#" className="section-list-right">
                  iPhone 14 Series
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 13{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 12{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 11{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 10{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 9{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone 8{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="detail-product dflex">
            {/* <div className="detail">
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2022/10/avt-apple-watch-se-trang.png" />
                <p className="name-product">
                  Apple Watch Series SE 2022 GPS 40mm ( Gen 2) | Viền nhôm dây
                  cao su | Chính Hãng VN/A
                </p>
                <p className="price">6.000.000</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet, itaque?
                </p>
                <p>4sao</p>
              </a>
            </div> */}
            <CardIphone />
          </div>
        </section>
        <section className="samsung">
          <div className="title dflex">
            <h3>Samsung</h3>
            <ul className="apple-list list-right dflex">
              <li>
                <a href="#" className="section-list-right">
                  Samsung S23 plus
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Samsung S23 Ultra
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Samsung S22 Plus
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Samsung S22 Ultra
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  iPhone S21 Plus{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Samsung S21 ultra{" "}
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Samsung S20 Ultra
                </a>
              </li>
            </ul>
          </div>
          <div className="detail-product dflex">
            {/* <div className="detail">
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2022/10/avt-apple-watch-se-trang.png" />
                <p className="name-product">
                  Apple Watch Series SE 2022 GPS 40mm ( Gen 2) | Viền nhôm dây
                  cao su | Chính Hãng VN/A
                </p>
                <p className="price">6.000.000</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet, itaque?
                </p>
                <p>4sao</p>
              </a>
          </div> */}
            <CardSamsung />
          </div>
        </section>
        <section className="samsung">
          <div className="title dflex apple-list list-right">
            <h3>Điện thoại nổi bật</h3>
            <ul className="apple-list list-right dflex">
              <li>
                <a href="#" className="section-list-right">
                  Xiaomi
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Sony
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  LG
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  Nokia
                </a>
              </li>
              <li>
                <a href="#" className="section-list-right">
                  OPPO
                </a>
              </li>
            </ul>
          </div>
          <div className="detail-product dflex">
            {/* <div className="detail">
              <a href="#">
                <img src="https://clickbuy.com.vn/uploads/2022/10/avt-apple-watch-se-trang.png" />
                <p className="name-product">
                  Apple Watch Series SE 2022 GPS 40mm ( Gen 2) | Viền nhôm dây
                  cao su | Chính Hãng VN/A
                </p>
                <p className="price">6.000.000</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet, itaque?
                </p>
                <p>4sao</p>
              </a>
            </div> */}
            <CardXiaomi />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;

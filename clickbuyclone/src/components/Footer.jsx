import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container dflex">
        <ul className="list-policy">
          <li>
            <a href="#">Chính sách bảo hành</a>
          </li>
          <li>
            <a href="#">Bảo hành Xiaomi chính hãng</a>
          </li>
          <li>
            <a href="#">Chính sách mua hàng Online</a>
          </li>
          <li>
            <a href="#">Mua hàng trả góp</a>
          </li>
          <li>
            <a href="#">Chính sách bảo mật thông tin khách hàng</a>
          </li>
        </ul>
        <ul className="list-phone">
          <li>
            <p>Tổng đài hỗ trợ (Từ 8:00-21:00)</p>
          </li>
          <li>
            <p>Hotline bán hàng:</p>
            <a href="#">0966.06.2468 | 1900.633.471</a>
          </li>
          <li>
            <p>Hotline bảo hành, kỹ thuật:</p>
            <a href="#">1900.633.471</a>
          </li>
          <li>
            <p>Hotline hỗ trợ phần mềm:</p>
            <a href="#">096.282.4422</a>
          </li>
          <li>
            <a href="#">
              <p>Hotline phản ánh chất lượng dịch vụ:</p>
              1900.633.471{" "}
            </a>
          </li>
        </ul>
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
        </div>
        <div className="social">
          <a href="#">
            <i class="fa-brands fa-facebook"></i>facebook
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>youtube
          </a>
          <figure>
            <img src="https://clickbuy.com.vn/dathongbao.png" />
          </figure>
        </div>
      </div>
      <p className="cpr">
        © 2013 ~ 2023 - Công ty TNHH &amp; XNK ClickBuy. GPKD số 0106081880 do
        Sở KH &amp; ĐT Thành phố Hà Nội cấp ngày 10/01/2013
      </p>
    </footer>
  );
}

export default Footer;

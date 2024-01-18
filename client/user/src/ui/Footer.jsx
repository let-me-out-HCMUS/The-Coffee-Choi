import React from 'react'

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white p-5">
        <div className="grid grid-cols-1 p-6 gap-4 md:grid-cols-2">
            <div>
            <p className="leading-10">Đặt hàng</p>
            <p className="leading-10">Liên hệ</p>
            <p className="leading-10">227 Nguyễn Văn Cừ, Q.5, Thành phố Hồ Chí Minh</p>
            </div>
            <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FloserUSK21&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5942683225857747" width="340px" height="130px" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className="grid grid-cols-2">
            <div>
                <p className="font-semibold text-sm">Giới thiệu</p>
                <div className="py-2">
                <p>Về chúng tôi</p>
                <p>Sản phẩm</p>
                <p>Khuyến mãi</p>
                <p>Chuyện cà phê</p>
                </div>
            </div>
            <div>
                <p className="font-semibold text-sm">Điều khoản</p>
                <div className="py-2">
                <p>Điều khoản sử dụng</p>
                <p>Chính sách bảo mật thông tin</p>
                </div>
            </div>
            </div>
        </div>
        <div className="px-4 py-2">
            <p className="border-t-2 pt-8 border-t-white text-sm text-left">
                Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN <br/>
                Mã số DN: 69696969 do sở kế hoạch và đầu tư tp. HCM cấp ngày 28/01/20204.
                Người đại diện: VI LÝ DUY TRƯỜNG <br/>
                Địa chỉ: 227 Nguyễn Văn Cừ, phường 04, quận 5, tp Hồ Chí Minh 
                Điện thoại: (012) 3456 789   Email: n01@ptudweb.vn <br/>
                © 2023-2024 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu
            </p>
        </div>
    </div>
  )
}

export default Footer
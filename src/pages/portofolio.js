import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Cards from "../components/cards"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Slider from "react-slick"

const Portofolio = ({ location }) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  }

  return (
    <Layout location={location} title={"Công việc & Dự án"}>
      <Seo title="Công việc & Dự án" />
      <div className="row content-of-porto py-lg-5">
        <div className="col-lg-9 col-md-10 mx-auto">
          <h2 className="heading-porto font-weight font-bold">Công việc & dự án thực hiện</h2>
          <p className="lead text-body-secondary">
          Xu hướng kinh doanh hiện nay tập trung vào các lĩnh vực bền vững và ứng dụng công nghệ. 
          Chăm sóc sức khỏe cá nhân hóa, thẩm mỹ công nghệ cao, thực phẩm sạch, đào tạo nghề trực tuyến, 
          và công nghệ số như AI, blockchain đang dẫn đầu. Nhu cầu tiêu dùng thông minh, tiện lợi và 
          thân thiện với môi trường thúc đẩy các ngành này phát triển nhanh chóng.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 g-3 mb-5">
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/venus/kiosk-interface.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/venus/kiosk-menu.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/venus/simrs.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Dịch vụ thẩm mỹ, chăm sóc sức khỏe"
            descriptions="Bạn có biết? Sức khỏe không chỉ là không bệnh tật, mà còn là sự tươi trẻ, tràn đầy năng lượng từ bên trong! Gói chăm sóc sức khỏe & sắc đẹp chủ động sẽ mang đến cho bạn trải nghiệm toàn diện, giúp bạn sống khỏe, đẹp mỗi ngày mà không phải lo lắng!"
            tags="Sức khỏe - Làm đẹp"
            cta="https://www.venusbeautyparadise.com/"
          ></Cards>
        </div>
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-landing.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-handson.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-handson-profile-store.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-mobile.jpeg"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Đào tạo Xây dựng thương hiệu cá nhân"
            descriptions="Để xây dựng nhân hiệu hiệu quả, bạn cần tuân theo những quy trình cơ bản nhằm tạo dựng một hình ảnh cá nhân chuyên nghiệp & đáng tin cậy"
            tags="Đào tạo, Thương hiệu"
            cta="https://www.idolacademy.vn"
          ></Cards>
        </div>
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/pricebook/mitra-login-one.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/mitra-login-handson.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/mitra-desktop.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Đào tạo nghề F&B"
            descriptions="HỌC PHÍ RẺ HƠN THỊ TRƯỜNG 20-30% THỜI GIAN HỌC NGẮN TRONG 01 THÁNG, DẠY CHẤT LƯỢNG CAO CHỈ 10 HV/LỚP GIẢNG VIÊN SIÊU CẤP LÀ VUA BẾP, TỔNG BẾP TRƯỞNG KS 5 SAO, PHÙ THỦY PHA CHẾ TỐT NGHIỆP CÓ BẰNG GIÁ TRỊ TOÀN QUỐC, XIN VIỆC DỄ DÀNG NẾU MUỐN"
            tags="Đào tạo, Ngành nghề F&B"
            cta="https://www.ivip.vn"
          ></Cards>
        </div>
        <div className="col">
          <StaticImage
            src="../images/my-porto/sabi/e-invoicing.png"
            alt="e-invoicing"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="Đào tạo công nghệ dữ liệu Big Data"
            descriptions="ĐÂY LÀ MỘT CHƯƠNG TRÌNH ĐÀO TẠO GIA TỐC, ĐÃ ĐƯỢC NGHIÊN CỨU KĨ LƯỠNG VỚI ỨNG DỤNG CAO, MANG LẠI HIỆU QUẢ TỨC THÌ ĐỐI VỚI MỌI LĨNH VỰC KINH DOANH, HỌC 1 TUẦN, THU NHẬP TRÊN 1000$/THÁNG
KHÔNG YÊU CẦU CÓ KIẾN THỨC, KINH NGHIỆM VỀ CÔNG NGHỆ THÔNG TIN, DẠY MỚI TỪ ĐẦU
ỨNG DỤNG CÁC CÔNG NGHỆ TỐI TÂN NHẤT ĐANG ĐƯỢC CÁC CHUYÊN GIA HÀNG ĐẦU TIN DÙNG
KIẾN THỨC ỨNG DỤNG CHO MỌI NGÀNH NGHỀ"
            tags="Đào tạo- Big data"
            cta="https://www.bigdata-ai.vn"
          ></Cards>
        </div>
        <div className="col">
          <StaticImage
            src="../images/my-porto/sungnikah/sungnikah.png"
            alt="sungnikah"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="Xuvi Farm"
            descriptions="Chợ nông sản online là nền tảng trực tuyến kết nối người bán và người mua nông sản. Tại đây, các sản phẩm như rau, củ, quả, thịt, cá, và thực phẩm chế biến được giao dịch dễ dàng, thường qua ứng dụng hoặc website. Chợ này giúp giảm trung gian, đảm bảo giá cả minh bạch và thuận tiện trong mua sắm, đặc biệt với sản phẩm sạch, hữu cơ."
            tags="Siêu thị- Thực phẩm"
            cta="https://www.nongssan.asia"
          ></Cards>
        </div>
        <div className="col">
          <StaticImage
            src="../images/my-porto/uiii/digital-library-uiii.png"
            alt="sabi-landing-page"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="Hỗ trợ vay tài chính"
            descriptions="Tư vấn các khoản vay tài chính từ 5-100 tỷ"
            tags="Tài chính - Khoản vay"
            cta="https://zalo.me/0915467890"
          ></Cards>
        </div>        
        <div className="col">
          <StaticImage
            src="../images/my-porto/sabi/sabi-landing-1.png"
            alt="sabi-landing-page"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="King Broker Academy"
            descriptions="Đào tạo cấp chứng chỉ môi giới bất động sản là khóa học trang bị kiến thức và kỹ năng cần thiết cho nghề môi giới, như pháp lý, quy hoạch, kinh doanh và đàm phán. Hoàn thành khóa học, học viên sẽ tham gia kỳ thi để được cấp chứng chỉ hành nghề, đáp ứng yêu cầu pháp luật và nâng cao uy tín trong lĩnh vực bất động sản."
            tags="Web-Application"
            cta="https://kingbrokeracademy.com/"
          ></Cards>
        </div>

      </div>
    </Layout>
  )
}

Portofolio.propTypes = {
  location: PropTypes.object,
}

export default Portofolio

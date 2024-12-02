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
          <h2 className="heading-porto font-weight font-bold">My Portofolio</h2>
          <p className="lead text-body-secondary">
            In software development or technology projects, portfolio can refer
            to a collection of projects that are being managed or have been
            completed by a team or organization. It includes projects such as
            software development, system implementation, technology integration,
            and other projects.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 g-3 mb-5">
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/amtek/kiosk-interface.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/amtek/kiosk-menu.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/amtek/simrs.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Venus - Thẩm mỹ viện, chăm sóc sức khỏe chủ động"
            descriptions="Bạn có biết? Sức khỏe không chỉ là không bệnh tật, mà còn là sự tươi trẻ, tràn đầy năng lượng từ bên trong! Gói chăm sóc sức khỏe & sắc đẹp chủ động sẽ mang đến cho bạn trải nghiệm toàn diện, giúp bạn sống khỏe, đẹp mỗi ngày mà không phải lo lắng!

🔎 Xét Nghiệm Chuyên Sâu: Định kỳ kiểm tra các chỉ số sức khỏe quan trọng để hiểu rõ về cơ thể bạn. Không cần chờ đến khi bệnh tật xuất hiện mới quan tâm!

👨‍⚕️ Tư Vấn Từ Bác Sỹ Chuyên Khoa: Được tư vấn bởi bác sỹ hàng đầu, cá nhân hóa phác đồ chăm sóc phù hợp với thể trạng và nhu cầu của bạn.

🍃 Cung Cấp Thực Phẩm Chức Năng Định Kỳ: Mỗi tháng, chúng tôi sẽ cung cấp các loại thực phẩm chức năng chất lượng cao, được lựa chọn kỹ lưỡng để hỗ trợ sức khỏe và sắc đẹp từ bên trong.

💧 Truyền Dưỡng Chất Làm Đẹp & Chống Lão Hóa:

Dưỡng chất chuyên biệt giúp tái tạo da, làm mờ nếp nhăn, tăng độ đàn hồi và mang lại làn da rạng rỡ.
Chống lão hóa tối ưu với liệu trình truyền dưỡng chất trực tiếp, bổ sung vitamin, khoáng chất và các thành phần dưỡng da cần thiết, giúp giữ gìn tuổi thanh xuân và chống lại dấu hiệu lão hóa từ bên trong.."
            tags="Sức khỏe - Làm đẹp"
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
            title="Đào tạo khai thác dữ liệu Big Data"
            descriptions="ĐÂY LÀ MỘT CHƯƠNG TRÌNH ĐÀO TẠO GIA TỐC, ĐÃ ĐƯỢC NGHIÊN CỨU KĨ LƯỠNG VỚI ỨNG DỤNG CAO, MANG LẠI HIỆU QUẢ TỨC THÌ ĐỐI VỚI MỌI LĨNH VỰC KINH DOANH, HỌC 1 TUẦN, THU NHẬP TRÊN 1000$/THÁNG
KHÔNG YÊU CẦU CÓ KIẾN THỨC, KINH NGHIỆM VỀ CÔNG NGHỆ THÔNG TIN, DẠY MỚI TỪ ĐẦU
ỨNG DỤNG CÁC CÔNG NGHỆ TỐI TÂN NHẤT ĐANG ĐƯỢC CÁC CHUYÊN GIA HÀNG ĐẦU TIN DÙNG
KIẾN THỨC ỨNG DỤNG CHO MỌI NGÀNH NGHỀ"
            tags="Đào tạo, Big dat"
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
            descriptions="HỌC PHÍ RẺ HƠN THỊ TRƯỜNG 20-30%
THỜI GIAN HỌC NGẮN TRONG 01 THÁNG, DẠY CHẤT LƯỢNG CAO CHỈ 10 HV/LỚP
GIẢNG VIÊN SIÊU CẤP LÀ VUA BẾP, TỔNG BẾP TRƯỞNG KS 5 SAO, PHÙ THỦY PHA CHẾ
TỐT NGHIỆP CÓ BẰNG GIÁ TRỊ TOÀN QUỐC, XIN VIỆC DỄ DÀNG NẾU MUỐN"
            tags="Đào tạo, Ngành nghề F&B"
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
            title="Đào tạo nhân hiệu"
            descriptions="Để xây dựng nhân hiệu hiệu quả, bạn cần tuân theo những quy trình cơ bản nhằm tạo dựng một hình ảnh cá nhân chuyên nghiệp & đáng tin cậy"
            tags="Đào tạo- Thương hiệu"
            cta="https://www.idolacademy.vn"
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
            title="Sungnikah.(com)"
            descriptions="Sungnikah is a provider of digital wedding/wedding invitation services such as wedding website design, wedding ceremony design, and souvenir invitation design and brings together clients/users and wedding vendors."
            tags="Web-Application"
            cta="https://www.idolacademy.vn"
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
            title="Sabi ( LaaS )"
            descriptions="Sabi are account aggregator solution that provides access to business solutions with integrated financing aimed at micro and small business owners. Sabi operates as a member of the Investree Group, which is under the supervision and licensing of the Financial Services Authority (OJK)."
            tags="Web-Application"
            cta="https://getsabi.id"
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
            title="UIII Digital Library Aggregator Systems"
            descriptions="Digital Library Aggregator System, the purpose of this application can be used in various campus or academic institutions, combining information from the OJS, EPRINTS, SLIMS platforms by making it easy to search for information on one platform which includes information on journal data, dissertations, etc."
            tags="Web-Application"
            cta="https://library.uiii.ac.id"
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

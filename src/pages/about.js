import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import BlockElement from "../components/blockElement"
import Timelines from "../components/timelines"
import Skills from "../components/skils"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const About = ({ location }) => {
  return (
    <Layout location={location} title={"Giới thiệu"}>
      <Seo title="Giới thiệu" />
      <BlockElement component="div" className="d-flex section-about-me row">
        <BlockElement
          component="div"
          className="col-sm-12 col-md-8 col-lg-10 order-2 order-sm-1 order-md-1 order-lg-1 spacer-0-sm"
        >
          <p className="about-intro">
            Rất vui được gặp bạn ở đây! Tôi là Sơn Tùng, sống ở Hà Nội
            đang làm việc tại <a href="https://www.thestartup.vn">Công ty Cổ phần tập đoàn The Startup.</a>
            <br />Tôi phụ trách <b>Xây dựng phát triển đội ngũ nhân lực kinh doanh</b> cho công ty, Tôi tham gia
            thiết lập hệ thống xây dựng kế hoạch kinh doanh các mảng như {" "}
            <b>Đào tạo nguồn nhân lực</b> (Khai thác phần tích dữ liệu Big data, <a href="http://idolacademy.vn">xây dựng nhân hiệu</a>, <a href="https://www.ivip.vn/">nghành nghề  thực chiến kinh doanh truyền thống...</a>);
            <b>Thẩm mỹ viện</b> (Phẫu thuật thẩm mỹ, Chăm sóc sức khỏe - sắc đẹp chủ động, thực phẩm bổ dưỡng...);
            <b><a href="https://zalo.me/0915467890">Hỗ trợ tài chính</a></b> (Tư vấn các khoản vay tài chính từ 5-100 tỷ);
            <b>Chuỗi siêu thị thực phẩm</b> (Nông sản, đặc sản, ứng dụng mua sắm thực phẩm hàng ngày...).<br />
             Và cũng có một số kinh nghiệm về{" "} <b>lãnh đạo bao gồm vai trò quản lý đội nhóm</b>.
          </p>
          <Link href="/personalities">Tìm hiểu thêm</Link>
        </BlockElement>
        <BlockElement
          component="div"
          className="col-sm-12 col-md-4 col-lg-2 order-1 order-sm-1 order-md-1 order-lg-2 mb-5"
        >
          <StaticImage
            src="../images/profile-pic.png"
            alt="Profile picture"
            loading="lazy"
            className="img-fluid avatar-wobble heros-content-img"
          />
        </BlockElement>
      </BlockElement>
      <Timelines className="mb-5 d-block" />
      <Skills />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.object,
}

export default About

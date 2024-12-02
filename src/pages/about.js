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
            Rất vui được gặp bạn ở đây!  mình là Sơn Tùng, người đam mê khám phá các chủ đề về kinh doanh, phát triển bản thân và đọc sách.
             Mình tin rằng mỗi người đều có thể phát triển và vươn tới mục tiêu của mình bằng cách học hỏi và thay đổi tích cực. 
             Hy vọng có thể chia sẻ những kiến thức và quan điểm này với mọi người, cùng nhau học hỏi và phát triển! <Br></Br>
            Hiện tại mình đang làm việc tại <a href="https://www.thestartup.vn">Công ty Cổ phần tập đoàn The Startup.</a>
            <br />Mình phụ trách về tuyển dụng Xây dựng phát triển đội ngũ nhân lực kinh doanh, xây dựng kế hoạch, thiết lập 
            hệ thống và lãnh đạo quản lý đội nhóm kinh doanh. Rất vui nếu có thể kết nối hỗ trợ mọi người cùng nhau phát triển trong công việc!
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

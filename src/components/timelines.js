import React, { Fragment } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import BlockElement from "../components/blockElement"

const Timelines = () => {
  return (
    <Fragment>
      <h4>Kinh Nghiệm</h4>
      <BlockElement
        className="p-5 mb-5 mt-5 experience-content"
        component="span"
      >
        <blockquote className="m-5 content-blockqote">
          <p className="text-center">
            "<b>Kinh nghiệm là một khía cạnh cơ bản của cuộc sống con người</b> liên 
            quan đến việc học tập và phát triển cá nhân thông qua tương tác trực tiếp với 
            thế giới. Đây là một hiện tượng chủ quan và đa diện, được hình thành bởi 
            quan điểm, cảm xúc của từng cá nhân và bối cảnh văn hóa và xã hội mà nó 
            diễn ra. Kinh nghiệm có tác động đáng kể đến kiến ​​thức, kỹ năng và sự 
            hiểu biết của một người về thế giới nói chung."
          </p>
        </blockquote>
      </BlockElement>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f7f7f7" }}
          date="2024 - Đến nay"
          iconStyle={{ background: "rgb(008 110 030)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Công ty cổ phần tập đoàn The Startup
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Quản lý kinh doanh - nhân sự - đối ngoại</h4>
          <p>
          Bất động sản ( Sàn giao dịch BĐS, Mua bán sát nhập… )<br />
          Thẩm mỹ viện ( các dịch vụ thẩm mỹ, bán thực phẩm chức năng, bán các gói chăm sóc sức khoẻ và làm đẹp chủ động )<br />
          Dịch vụ tư vấn luật ( Xử lý tranh chấp dân sự và hình sự )<br />
          Tài chính ( Tư vấn hỗ trợ cho các khoản vay từ 5 - 500 tỷ )<br />
          Đào tạo nghề ( Dạy nghề chất lượng cao )<br />
          Bán lẻ ( Phân phối nông sản, đặc sản Việt Nam, chuỗi siêu thị )<br />
          Công nghệ ( Nghiên cứu thị trường, công nghệ Big data, Quảng cáo )
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f7f7f7" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Sahabat Bisnis Inovasi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Frontend Lead</h4>
          <p>
            Team Leadership · Communication · Problem Solving · Cross-browser
            Compatibility · Analytical Skills · TypeScript · PrimeNG · Vuetify ·
            Nuxt.js · CSS Prepocessor · REST APIs · Microservices · Vue ·
            AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Sahabat Bisnis Inovasi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sr. Frontend Developer
          </h4>
          <p>
            Problem Solving · Cross-browser Compatibility · Analytical Skills ·
            TypeScript · PrimeNG · Vuetify · Nuxt.js · CSS Prepocessor · REST
            APIs · Microservices · Vue · AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Pricebook Digital Indonesia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Developer
          </h4>
          <p>
            Redux.js · REST APIs · SCSS · Progressive Web Applications (PWAs) ·
            React.js · CodeIgniter · MySQL · PHP · JavaScript · JSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Amtek Labs ( Software House / IT Consultant )
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jr. Frontend Developer
          </h4>
          <p>
            Bootstrap · Laravel · Google Material Design · Vue · Laravel ·
            jQuery · PostgreSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2017"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Information System
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Diploma of Degree
          </h4>
          <p>
            Technology Of Yogyakarta University - D3 System Information /
            Informatic Management - 2.79
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  )
}

export default Timelines

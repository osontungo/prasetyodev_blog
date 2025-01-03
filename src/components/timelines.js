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
          <h4 className="vertical-timeline-element-subtitle">Quản lý nhân sự - kinh doanh - đối ngoại</h4>
          <p>          
          Thẩm mỹ viện <i>(<a href="https://www.venusbeautyparadise.com">Dịch vụ thẩm mỹ</a>,Thực phẩm chức năng,Gói chăm sóc sức khoẻ & làm đẹp chủ động )</i><br />
          Đào tạo nghề <i>(<a href="https://www.idolacademy.vn">Xây dựng nhân hiệu</a>, <a href="https://www.ivip.vn">Dạy nghề F&B</a>, <a href="https://www.bigdata-ai.vn">Phân tích dữ liệu Big Data</a>)</i><br />
          Bán lẻ <i>(Phân phối nông sản, đặc sản Việt Nam, chuỗi siêu thị )</i><br />
          Tài chính <i>(<a href="https://zalo.me/0915467890">Tư vấn các khoản vay tài chính từ 5-100 tỷ</a>)</i><br />
          Bất động sản <i>(Sàn giao dịch BĐS, Mua bán sát nhập… )</i><br />
          Dịch vụ tư vấn luật <i>(Xử lý tranh chấp dân sự và hình sự )</i><br />
          Công nghệ <i>(Nghiên cứu thị trường, công nghệ Big data, Quảng cáo )</i>
          </p>
        </VerticalTimelineElement>        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f7f7f7" }}
          date="2019 - 2024"
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            UBND Thị Trấn Ngọc Lặc - Thanh Hóa
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Công chức Tài chính kế toán</h4>
          <p>
          Xây dựng dự toán thu, chi ngân sách · Triển khai các biện pháp khai thác nguồn thu trên địa bàn · Thực hiện dự toán chi ngân sách · Báo cáo tài chính, Quyết toán ngân sách · Quản lý tài sản công · 
          Quản lý các dự án đầu tư xây dựng · Quản lý quỹ công chuyên dùng · Kê khai quyết toán thuế, BHXH, chế độ lương, thưởng, phụ cấp
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            UBND Xã Ngọc Khê - Ngọc Lặc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Công chức Tài chính kế toán
          </h4>
          <p>
          Xây dựng dự toán thu, chi ngân sách · Triển khai các biện pháp khai thác nguồn thu trên địa bàn · Thực hiện dự toán chi ngân sách · Báo cáo tài chính, Quyết toán ngân sách · Quản lý tài sản công · 
          Quản lý các dự án đầu tư xây dựng · Quản lý quỹ công chuyên dùng · Kê khai quyết toán thuế, BHXH, chế độ lương, thưởng, phụ cấp
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2018"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            UBND Xã Lam Sơn - Ngọc Lặc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Công chức Tài chính kế toán
          </h4>
          <p>
          Triển khai các biện pháp khai thác nguồn thu trên địa bàn · Báo cáo tài chính · Quản lý tài sản công, công cụ dụng cụ · 
          Quản lý quỹ công chuyên dùng · Kê khai quyết toán thuế, BHXH, chế độ lương, thưởng, phụ cấp
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Đại học công nghiệp TP Hồ Chí Minh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sinh viên Ngành Kế Toán - Kiểm Toán
          </h4>
          <p>
          Kế toán tài chính, kế toán quản trị, kiểm toán, thuế, lập báo cáo tài chính · Excel, MISA, SAP, phân tích dữ liệu, hệ thống thông tin kế toán
          · Tư duy logic, giải quyết vấn đề, dự báo tài chính · Làm việc nhóm, giao tiếp, quản lý thời gian · Tỉ mỉ, trung thực, tuân thủ pháp luật
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2010"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
          Trường Cao đẳng Kinh tế - Kỹ thuật Công Thương
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sinh viên Ngành Kế Toán Doanh Nghiệp
          </h4>
          <p>
          Kế toán tổng hợp, kế toán chi tiết, kế toán thuế, báo cáo tài chính, phân tích tài chính · MISA, FAST, SAP ·
          Dòng tiền, công nợ, hàng tồn kho, tài sản cố định · Kểm soát nội bộ, tuân thủ pháp luật
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  )
}

export default Timelines

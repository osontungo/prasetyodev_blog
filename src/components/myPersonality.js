import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import BlockElement from "../components/blockElement"

const MyPersonality = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "personality" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <BlockElement className="row mb-5 mt-5" component="div">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <p className="mt-5">
          <b>Https://SơnTùng.Xyz</b> - Nhân hiệu là sự lặp đi lặp lại một cách kiên định những thông điệp và giá trị 
          mà mình đã đặt ra, là sự phấn đấu kiên cường để bảo vệ những điều tốt đẹp mà mình đang đại diện.  
          không phải là một công việc, không có ngày nghỉ phép, không có thủ thuật mỳ ăn liền. Nó là quá trình 
          rèn luyện để sống đúng, sống thật với chính bản thân mình. <br/>
          THE STARTUP không chỉ là một công ty – chúng tôi là bệ phóng cho những ước mơ lớn, là ngôi nhà của 
          những tâm hồn táo bạo và khát vọng mãnh liệt. Chúng tôi khao khát tạo nên một tương lai nơi sáng tạo 
          không có giới hạn, và nơi mỗi người đều có thể trở thành người kiến tạo sự thay đổi mà họ mong muốn.

        </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {data.allFile.edges.map((file, index) => {
            return (
              <Viewer
                key={index}
                fileUrl={file.node.publicURL}
                plugins={[defaultLayoutPluginInstance]}
              />
            )
          })}
        </Worker>
      </div>
    </BlockElement>
  )
}

export default MyPersonality

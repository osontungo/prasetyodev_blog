import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import BlockElement from "../components/blockElement"

const qlnn = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "qlnn" } }) {
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
          <b>Chứng chỉ Chuyên Viên Quản lý Nhà Nước</b> văn bằng xác nhận đã hoàn thành khóa 
          đào tạo về kiến thức và kỹ năng quản lý hành chính, bao gồm các lĩnh vực như pháp luật,
           chính sách công, tổ chức bộ máy nhà nước, công tác văn thư, quản lý nhân sự, và kỹ năng
            xử lý công việc hành chính. Chứng chỉ này thường cần thiết để bổ nhiệm, nâng ngạch, 
            hoặc đáp ứng tiêu chuẩn công việc trong các cơ quan nhà nước.
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

export default qlnn

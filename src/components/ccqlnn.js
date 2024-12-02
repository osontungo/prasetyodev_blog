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
          <b>SƠN TÙNG</b>,là một người có rất nhiều ý tưởng, cả những ý tưởng chưa từng tồn tại trước đây và từ suy nghĩ đa dạng của mình, ngoài việc có nhiều ý tưởng, mình còn thích phân tích, kỹ lưỡng và thích thu thập thông tin, thích suy luận theo nhiều chiều hướng khác nhau, một số thông qua bản tính vui vẻ, một số thông qua sự đồng cảm của mình. Rất muốn đồng hành phát triển cùng người khác trong sự chăm chỉ, ngăn nắp và nhẫn nại trong hành động.
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

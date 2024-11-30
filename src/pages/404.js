import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlockElement from "../components/blockElement"
import PropTypes from "prop-types"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <BlockElement component="div" type="min-height">
        <h2>404: Không tìm thấy</h2>
        <p>Bạn vừa bấm vào link không tồn tại... kiểm tra lại.</p>
      </BlockElement>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

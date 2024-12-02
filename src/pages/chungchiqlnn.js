import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Chungchiqlnn from "../components/chungchiql"
import PropTypes from "prop-types"

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={"Quản Lý Nhà Nước"}>
      <Seo title="Chứng chỉ" />
      <MyPersonality />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export default Chungchiql

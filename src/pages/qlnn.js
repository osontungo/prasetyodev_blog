import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyPersonality from "../components/CCQLNN"
import PropTypes from "prop-types"

const CCQLNN = ({ location }) => {
  return (
    <Layout location={location} title={"Chứng chỉ QLNN"}>
      <Seo title="Chuyên viên quản lý nhà nước" />
      <MyPersonality />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export default CCQLNN

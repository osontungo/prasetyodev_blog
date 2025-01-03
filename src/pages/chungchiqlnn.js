import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyPersonality from "../components/qlnn"
import PropTypes from "prop-types"

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={"Chứng chỉ"}>
      <Seo title="Chuyên viên quản lý nhà nước" />
      <MyPersonality />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export default Personalities

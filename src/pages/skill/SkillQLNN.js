import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SkillQLNN from "../components/skill/qlnn"
import PropTypes from "prop-types"

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={"Chứng chỉ chuyên viên"}>
      <Seo title="Chuyên viên quản lý nhà nước" />
      <MyPersonality />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export default SkillQLNN

import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import qlnn from "../components/qlnn"
import PropTypes from "prop-types"

const qlnn = ({ location }) => {
  return (
    <Layout location={location} title={"Personality"}>
      <Seo title="Personalities" />
      <Qlnn />
    </Layout>
  )
}

qlnn.propTypes = {
  location: PropTypes.object,
}

export default qlnn

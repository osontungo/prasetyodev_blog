import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Qlnn from "../components/qlnn"
import PropTypes from "prop-types"

const Qlnn = ({ location }) => {
  return (
    <Layout location={location} title={"Personality"}>
      <Seo title="Personalities" />
      <Qlnn />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export default Personalities

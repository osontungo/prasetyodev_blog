import React, { Fragment } from "react"
import Footer from "../components/footer"
import Navbar from "./navbar"
import Typewriter from "typewriter-effect"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading header-app">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString(`{${title}}`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`{ Son Tung }`)
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome cheers :)")
              .pauseFor(2000)
              .deleteAll()
              .typeString(`{ Son Tung }`)
              .start()
          }}
        />
      </h1>
    )
  } else {
    header = (
      <Typewriter
        onInit={typewriter => {
          typewriter.typeString(`${title}`).pauseFor(2000).start()
        }}
      />
    )
  }

  return (
    <Fragment>
      <Navbar title={header} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout

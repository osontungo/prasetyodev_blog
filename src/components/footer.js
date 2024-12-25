import * as React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      Develop by Sơn Tùng © {new Date().getFullYear()}, Built with
      {` `}
      <a className="d-block m-3" href="https://www.sontung.xyz">
        Sơn Tùng XYZ
      </a>
    </footer>
  )
}

export default Footer

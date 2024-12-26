import * as React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      Xây dựng bởi <a className="d-block m-3" href="https://desocialworld.com/u/lesontung">Sơn Tùng</a> © {` `} {new Date().getFullYear()}
    </footer>
  )
}

export default Footer

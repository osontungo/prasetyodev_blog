import * as React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      Copyright Sơn Tùng © {new Date().getFullYear()}, Thiết kế bởi
      {` `}
      <a className="d-block m-3" href="https://www.sontung.xyz">
        Sơn Tùng
      </a>
    </footer>
  )
}

export default Footer

import React from "react"
import { SocialIcon } from "react-social-icons"

const Social = () => {
  return (
    <div className="d-flex justify-content-start mb-3">
      <SocialIcon
        network="facebook"
        target="_blank"
        href="https://facebook.com/lesontungxyz"
        style={{ height: 50, width: 50, marginRight: 6 }}
      />
      <SocialIcon
        network="youtube"
        target="_blank"
        href="https://www.youtube.com/@sontungxyz"
        style={{ height: 50, width: 50, marginRight: 6 }}
      />
      <SocialIcon
        network="x"
        target="_blank"
        href="https://x.com/sontungxyz"
        style={{ height: 50, width: 50, marginRight: 6 }}
      />
      <SocialIcon
        network="instagram"
        target="_blank"
        href="https://www.instagram.com/tungthestartup"
        style={{ height: 50, width: 50, marginRight: 6 }}
      />
      <SocialIcon
        network="tumblr"
        target="_blank"
        href="https://mydesospace.com/u/lesontung"
        style={{ height: 50, width: 50 }}
      />
      <SocialIcon
        network="line"
        target="_blank"
        href="https://zalo.me/0915467890"
        style={{ height: 50, width: 50 }}
      />
      <SocialIcon
        network="tiktok"
        target="_blank"
        href="https://www.tiktok.com/@tungthestartup"
        style={{ height: 50, width: 50 }}
      />
    </div>
  )
}

export default Social

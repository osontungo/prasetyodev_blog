import React from "react"
import { SocialIcon } from "react-social-icons"

const Social = () => {
  return (
    <div className="d-flex justify-content-start mb-3">
      <SocialIcon
        network="facebook"
        target="_blank"
        href="https://facebook.com/lesontungxyz"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="youtube"
        target="_blank"
        href="https://www.youtube.com/sontungxyz"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="x"
        target="_blank"
        href="https://x.com/sontungxyz"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="instagram"
        target="_blank"
        href="https://www.instagram.com/tungthestartup"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="tumblr"
        target="_blank"
        href="https://mydesospace.com/u/lesontung"
        style={{ height: 30, width: 30 }}
      />
    </div>
  )
}

export default Social

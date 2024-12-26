/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BlockElement from "../components/blockElement"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            facebook
            linkedin
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BlockElement className="bio" component="div">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Được viết bởi <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a
            href={`https://desocialworld.com/u/lesontung`}
            target="_blank"
            rel="noreferrer"
          >
            Bạn có thể theo dõi mình ở đây
          </a>
        </p>
      )}
    </BlockElement>
  )
}

export default Bio

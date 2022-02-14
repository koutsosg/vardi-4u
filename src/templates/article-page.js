import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PdfReader from "../components/PdfReader/PdfReader"

import "semantic-ui-css/semantic.min.css"
import { Icon } from "semantic-ui-react"
const ArticlePageTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const siteUrl = `${data.site.siteMetadata?.siteUrl}${post.fields.slug}`

  const shares = [
    {
      icon: "facebook",
      color: "blue",
      url: `https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=https%3A%2F%2Ffvardi-4u.gr%2F${post.frontmatter.sharelink}%2F&display=popup&ref=plugin&src=share_button`,
      /*   circular: true, */
    },

    {
      icon: "linkedin",
      color: "blue",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ffvardi-4u.gr%2F${post.frontmatter.sharelink}`,
      /*   circular: true, */
    },
  ]
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        siteUrl={siteUrl}
        featuredImage={
          `https://fvardi-4u.gr${post.frontmatter.attachments[1].publicURL}` ||
          ``
        }
      />

      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        {post.frontmatter.author}
      </header>

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <PdfReader file={post.frontmatter.attachments[0].publicURL} />

        <footer>
          Πηγη:
          <a
            href={post.frontmatter.sourcelink}
            aria-label={`Σύνδεσμος για ${post.frontmatter.source}`}
            target="_blank"
            rel="noreferrer"
          >
            {post.frontmatter.source}
          </a>
          <div className="d-flex align-items-end flex-column">
            <div className="flex">
              <>Κοινοποίηση: </>
              {shares.map(share => (
                <a
                  className={share.sicon}
                  href={share.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    className={share.siconl}
                    circular={share.circular}
                    name={share.icon}
                    size="big"
                    color={share.color}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>

        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← Προηγούμενο άρθρο
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                Επόμενο άρθρο →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ArticlePageTemplate

export const pageQuery = graphql`
  query ArticlePageBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    sitePage {
      path
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }

      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        source
        sourcelink
        sharelink
        attachments {
          publicURL
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

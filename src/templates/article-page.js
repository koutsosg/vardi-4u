import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PdfReader from "../components/PdfReader/PdfReader"
const ArticlePageTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const siteUrl = `${data.site.siteMetadata?.siteUrl}${post.fields.slug}`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        siteUrl={siteUrl}
      />
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        {post.frontmatter.author}
      </header>

      <PdfReader file={post.frontmatter.attachments[0].publicURL} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <hr />
        <footer>
          <a
            href={post.frontmatter.sourcelink}
            aria-label={`Σύνδεσμος για ${post.frontmatter.source}`}
          >
            {post.frontmatter.source}
          </a>
        </footer>
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
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
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
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        source
        sourcelink
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

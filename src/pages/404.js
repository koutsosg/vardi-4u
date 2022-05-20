import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Η Σελίδα Δεν Υπάρχει</h1>
      <p>
        Η σελίδα που ψάχνεται δεν υπάρχει. Δοκιμάστε να γυρίσετε πίσω στην{" "}
        <Link to="/">Αρχική</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

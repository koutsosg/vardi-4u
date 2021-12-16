import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Card } from "semantic-ui-react"

const classes = {
  maindiv: "p-5",
  container: "",
  title: "gray",
  subtitle: "",
  span: "omg-lines",
  row: "row",
  col: " p-2 mx-auto",
  coldiv: "p-2",
  image: "",
  header: "",
  parag: "p-3 ",
}
const Articles = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes
  return (
    <>
      <div id="didyouknow" className={`${classes.maindiv}`}>
        <div className={`${classes.container}`}>
          <h3 className={`${classes.title}`}>ΗΞΕΡΕΣ ΟΤΙ...</h3>

          <div className={`${classes.row}`}>
            {articles.map(article => (
              <div className={`${classes.col}`}>
                <div className="">
                  <Link to={article.fields.slug} itemProp="url">
                    <Card
                      className="text-left"
                      link
                      header={article.frontmatter.title}
                      meta={article.frontmatter.author}
                      description={article.frontmatter.source}
                      /*   description={[`${article.frontmatter.description}`].join(
                        ""
                      )} */
                      /*   onClick={() => {
                        openModal(article.alias || "");
                      }} */
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default function allArticles(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            nodes {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                author
                description
                source
              }
            }
          }
        }
      `}
      render={data => <Articles data={data} {...props} />}
    />
  )
}

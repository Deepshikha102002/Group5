import React from "react"
import Image from "../components/Images/Images"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "react-bootstrap-icons"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { mdx } = data
  const { prev, next } = pageContext
  return (
    <Layout>
      <Image
        className=""
        style={{ margin: "0 auto", height: "200px", width: "100%" }}
        filename={mdx.frontmatter.image}
        alt={mdx.frontmatter.image}
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg col-md-12 col-sm-12">
            <div className="card card-body shadow mb-4">
              <h1 class="text-primary fw-bold">{mdx.frontmatter.title}</h1>
              
              <p>
                Posted on: <strong>{mdx.frontmatter.date}</strong>
              </p>
              <h1 class="pb-2 border-bottom text-center text-primary fw-bold"></h1>

              <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>

         
            <div className="text-center">
              {prev ? (
                <Link
                  to={`/blog${prev.node.fields.slug}`}
                  className="btn text-center border-primary shadow m-2"
                >
                  <span className="text-primary">
                    <ArrowLeft /> Previous
                  </span>
                </Link>
              ) : (
                <div></div>
              )}

              {next ? (
                <Link
                  to={`/blog${next.node.fields.slug}`}
                  className="btn text-center border-primary shadow m-2"
                >
                  <span className="text-primary">
                    Next
                    <ArrowRight />
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
            

            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      fields {
        slug
      }
      frontmatter {
        title
        date
        image
      }
    }
  }
`

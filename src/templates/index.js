import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";


const BlogIndexPageTemplate = ({image}) => {
    return (
      <Layout>
        <FullWidthImage img={getImage(image)} title={"Blog"} subheading={''} />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
}

BlogIndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const BlogIndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
      <BlogIndexPageTemplate
        image={frontmatter.image}
      />
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

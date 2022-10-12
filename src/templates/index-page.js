import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { HTMLContent } from "../components/Content";



// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
            
                  <div className="columns" style={{paddingBottom: "2em"}}>
                    <div className="column is-12">
                        <HTMLContent className={"is-size-5"} content={description}></HTMLContent>
                    </div>
                  </div>
            
                  <div className="columns" style={{paddingBottom: "2em"}}>
                    <div className="column is-12">
                    <div style={{display: "flex", justifyContent: 'space-around', paddingBottom: "1.5em"}}>
                      <div style={{display: "flex", flexDirection: 'column'}}>
                        <Link to="/servicios#extranjeria">
                          <PreviewCompatibleImage imageInfo={main.image1.image} />
                        </Link>
                        <h4 className="is-size-5">Extranjería</h4>
                       
                      </div>
                      <div style={{display: "flex", flexDirection: 'column'}}>
                        <Link to="/servicios#laboral">
                          <PreviewCompatibleImage imageInfo={main.image2.image} />
                        </Link>
                        <h4 className="is-size-5">Laboral</h4>
                        
                      </div>
                      <div style={{display: "flex", flexDirection: 'column'}}>
                        <Link to="/servicios#mediacion">
                          <PreviewCompatibleImage imageInfo={main.image3.image} />
                        </Link>
                        <h4 className="is-size-5">Mediación</h4>
                      </div>
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-around'}}>
                      <Link className="btn" to="/servicios">
                        Ver todos los servicios
                      </Link>
                    </div>
                    </div>
                  </div>

                  
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      Últimas entradas del blog
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Leer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={html}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          image1 {
              image {
              childImageSharp {
                gatsbyImageData(width: 100, quality: 64, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            image {
            childImageSharp {
              gatsbyImageData(width: 100, quality: 64, layout: CONSTRAINED)
            }
          }
        }
        image3 {
          image {
          childImageSharp {
            gatsbyImageData(width: 100, quality: 64, layout: CONSTRAINED)
          }
        }
      }
        }
      }
    }
  }
`;

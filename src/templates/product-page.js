import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
  main,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} subheading={''} />
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-11 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-3">
                  {heading}
                </h2>
                <h3 className="has-text-weight-semibold is-size-5">{description}</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features ids={['extranjeria', 'laboral', 'mediacion' ]} gridItems={intro.blurbs} columns={12}>
                  <div>
                  <h3 className="has-text-weight-semibold is-size-5">Nuestros servicios en Extranjería e inmigración:</h3>

                  Ofrecemos asesoramiento y tramitación de Expedientes, Iniciales y/o de Renovación, de las siguientes Autorizaciones, entre otros servicios:
                    <ul>
                      <li>Solicitud de Nacionalidad.</li>
                      <li>Solicitud de Renovación N.I.E.</li>
                      <li>Solicitud de N.I.E. Régimen Comunitario y Familiares de Comunitarios.</li>
                      <li>Solicitud de Autorización de Residencia Temporal Reagrupación Familiar.</li>
                      <li>Solicitud de Autorización de Residencia Temporal y Trabajo Cuenta Ajena.</li>
                      <li>Solicitud de Autorización de Residencia Temporal y Trabajo Cuenta Propia.</li>
                      <li>Solicitud de Autorización de Residencia y/o Trabajo Circunstancias Excepcionales:
                        <ul>
                          <li>Arraigo Social.</li>
                          <li>Arraigo Laboral.</li>
                          <li>Arraigo Familiar.</li>
                        </ul>
                      </li>
                      <li>Solicitud de Autorización de Residencia de Larga Duración/Larga Duración UE.</li>
                      <li>Solicitud de Autorización de Residencia de Visado de Estudiantes.</li>
                      <li>Solicitud de Autorización para Trabajar.</li>
                      <li>Solicitud de Autorización de Regreso.</li>
                      <li>Homologación de Títulos.</li>
                      <li>Apostillas de Títulos.</li>
                      <li>Legalización de Menores.</li>
                      <li>Cartas de Invitación.</li>
                      <li>Visados.</li>
                      <li>Cancelación de Penales.</li>
                      <li>Revocación de órdenes de expulsión.</li>
                      <li>Recursos contra la Administración:
                        <ul>
                          <li>Infracciones y Sanciones.</li>
                          <li>Internamientos y Expulsiones.</li>
                        </ul>
                      </li>
                      <li>Solicitud de:
                        <ul>
                          <li>Informes de Vivienda.</li>
                          <li>Informes de Arraigo.</li>
                          <li>Partidas de Nacimiento y/o Matrimonio.</li>
                          <li>Volantes de Empadronamiento y/o Convivencia.</li>
                        </ul>
                      </li>
                    </ul>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Link className="btn" to="/contacto">
                        Contacto
                      </Link>  
                    </div>
                  </div>

                  <div>
                    <h3  className="has-text-weight-semibold is-size-5">Nuestros servicios en Laboral y Seguridad Social:</h3>
                    <ul>
                      <li>Cálculo de indemnizaciones por despido o accidente.</li>
                      <li>Conciliaciones.</li>
                      <li>Relación con los Representantes Legales de los Trabajadores</li>
                      <li>Gestión y Administración de Nóminas</li>
                      <li>Reclamaciones salariales.</li>
                      <li>FOGASA.</li>
                      <li>Acoso laboral.</li>
                      <li>Sanciones disciplinarias injustificadas.</li>
                      <li>Seguridad social.</li>
                      <li>Prestaciones : Jubilación, viudedad, incapacidades, reclamos etc.</li>    
                    </ul> 
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Link className="btn" to="/contacto">
                        Contacto
                      </Link>  
                    </div>
                  </div>

                  <div>
                    <h3  className="has-text-weight-semibold is-size-5">Nuestros servicios en Mediación</h3>
                    <ul>
                      <li>Mediación Social</li>
                      <li>Mediación Familiar</li>
                      <li>Mediación Mercantil</li>
                      <li>Mediación Contencioso-Administrativo</li>
                    </ul>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Link className="btn" to="/contacto">
                        Contacto
                      </Link>  
                    </div>
                  </div>
                </Features> 
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
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
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

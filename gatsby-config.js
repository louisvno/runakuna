const siteUrl = "https://www.asesoriarunakuna.es";

module.exports = {
  siteMetadata: {
    title: "Runakuna Asesoría Jurídica",
    description: `Asesoría Jurídica Runakuna. 
    Situada en Barcelona, España. Abogados en extranjería, migración y nacionalidad. 
    Ofrecemos servicios de extranjería, nacionalidad española, laboral, seguridad social, mediación, renovación N.I.E., solicitud de N.I.E. régimen Comunitario y Familiares de Comunitarios, Solicitud de Autorización de Residencia Temporal Reagrupación Familiar, Solicitud de Autorización de Residencia Temporal y Trabajo Cuenta Ajena, Solicitud de Autorización de Residencia Temporal y Trabajo Cuenta Propia, Solicitud de Autorización de Residencia y/o Trabajo Circunstancias Excepcionales, Arraigo Social, Arraigo Laboral, Arraigo Familiar, Solicitud de Autorización de Residencia de Larga Duración, Larga Duración UE, Solicitud de Autorización de Residencia de Visado de Estudiantes, Solicitud de Autorización para Trabajar, Solicitud de Autorización de Regreso, Homologación de Títulos, Apostillas de Títulos, Legalización de Menores, Cartas de Invitación, Visados, Recursos contra la Administración, Infracciones y Sanciones, Internamientos y Expulsiones. Asilos, protección internacional. Cálculo de indemnizaciones por despido o accidente, Conciliaciones, Relación con los Representantes Legales de los Trabajadores, Gestión y Administración de Nóminas, Reclamaciones salariales, FOGASA, Sanciones disciplinarias injustificadas, Seguridad social, Prestaciones, Jubilación, viudedad, incapacidades, reclamos etc. Sigue nuestro blog jurídico, donde publicaremos temas de interés y noticias.`,
    },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allMarkdownRemark {
            nodes {
              frontmatter {
                date
              }
              parent {
                ... on File {
                  name
                }
              }
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allMarkdowns}
        }) => {
          console.log(allMarkdowns)

          const mkMap = allMarkdowns.reduce((acc, curr) => {
            if(curr?.frontmatter.date) {
              return {...acc, [`/blog/${curr.parent.name}/`] : curr.frontmatter.date}
            }
            return {...acc}
          }, {})
          return allPages.map(page => {
            return { ...page, modified: mkMap[page.path]}
          })
        },
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, modified }) => {
          return {
            url: path,
            lastmod: modified,
          }
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};

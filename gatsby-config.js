const siteUrl = "https://www.asesoriarunakuna.es";

module.exports = {
  siteMetadata: {
    title: "Runakuna Asesoría Jurídica",
    description: `Asesoría Jurídica Runakuna. Situada en Barcelona, España.
    Abogados en extranjería, migración y nacionalidad.Servicios de extranjería, nacionalidad española, laboral, seguridad social, mediación, N.I.E, Arraigo Social, Arraigo Laboral, Arraigo Familiar, asilo, protección internacional. Sigue nuestro blog. Comunitario.
    `,
    },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
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

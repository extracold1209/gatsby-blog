// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const getMarkdownPagesQuery = `
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `;

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;
  
  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');
  
  const result = await graphql(getMarkdownPagesQuery);
  
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

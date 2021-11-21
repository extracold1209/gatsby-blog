import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

const HeroHeader: React.FC = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{__html: data.site.siteMetadata.home.description}}
        />
      </div>
    )}
  />
);

export default HeroHeader;

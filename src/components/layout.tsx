import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Navigation from '../components/navigation';
import 'prismjs/themes/prism-okaidia.css';

const Layout: React.FC = ({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation/>
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img"
          aria-label="love">❤️</span> by <a
          href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  );
};

export default Layout;

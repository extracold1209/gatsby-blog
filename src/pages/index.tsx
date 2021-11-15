import React from 'react';
import { Link, PageProps } from 'gatsby';

import '../styles/index.scss';


export default function IndexRoute(props: PageProps) {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
}

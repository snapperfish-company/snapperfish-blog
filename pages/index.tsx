import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

export default class Index extends React.Component<undefined, undefined> {
  public render () {
    const meta = [
      { content: 'Sample', name: 'description' },
      { content: 'sample, something', name: 'keywords' },
    ]
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={meta}
        />
        <h1>
          Hi people
        </h1>
        <p>Welcome to your new Gatsby site</p>
        <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
        <h3>Supported file types</h3>
        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/html/')}>HTML</Link>
          </li>
          <li>
            <Link to={prefixLink('/json/')}>JSON</Link>
          </li>
          <li>
            <Link to={prefixLink('/yaml/')}>YAML</Link>
          </li>
          <li>
            <Link to={prefixLink('/toml/')}>TOML</Link>
          </li>
        </ul>
        <h3>Supported CSS processors</h3>
        <ul>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={prefixLink('/css-modules/')}>CSS Modules</Link>
          </li>
          <li>
            <Link to={prefixLink('/sass/')}>Sass</Link>
          </li>
          <li>
            <Link to={prefixLink('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    );
  }
}

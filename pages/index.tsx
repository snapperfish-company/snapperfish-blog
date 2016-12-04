import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import * as sortBy from 'lodash/sortBy';
import access = require('safe-access');
import includes = require('core-js/library/fn/string/includes');

type Page = {
  path: string;
};

type Pages = Page[];

type Route = {
  pages: Pages;
};

type Props = {
  route: Route;
};

export default class Index extends React.Component<Props, undefined> {
  public render() {
    const meta = [
      { content: 'Sample', name: 'description' },
      { content: 'sample, something', name: 'keywords' },
    ];

    const pageLinks = this.renderPageLinks(this.props.route.pages);

    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={meta}
        />
        {pageLinks}
      </div>
    );
  }

  protected renderPageLinks(pages: Pages): JSX.Element[] {
    const sortedPages: Pages = sortBy(pages, (page) =>
      access(page, 'data.date'),
    ).reverse();
    return sortedPages.map(this.renderPageLink);
  }

  protected renderPageLink(page: Page): JSX.Element {
    if (access(page, 'file.ext') === 'md' && !includes(page.path, '/404')) {
      const title = access(page, 'data.title') || page.path;
      return (
        <li
          key={page.path}
        >
          <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>{title}</Link>
        </li>
      );
    }
    return undefined;
  }
}

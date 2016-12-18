import * as React from 'react';
import * as Helmet from 'react-helmet';
import { config } from 'config';
import sortBy = require('lodash/sortBy');
import access = require('safe-access');
import includes = require('core-js/library/fn/string/includes');
import { Teaser } from '../components/Teaser/Teaser';

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
    const filteredPages = pages.filter((page) => access(page, 'file.dir') === 'posts');
    const sortedPages: Pages = sortBy(filteredPages, (page) =>
      access(page, 'data.date'),
    ).reverse();
    return sortedPages.map((page, key) => (
      <div key={page.path} className='teaser'>
        {this.renderPageLink(page, key === 0)}
      </div>
    ));
  }

  protected renderPageLink(page: Page, isFirst: boolean): JSX.Element {
    if (access(page, 'file.ext') === 'md' && !includes(page.path, '/404')) {
      const title: string = access(page, 'data.title') || page.path;
      const teaser: string = access(page, 'data.teaser');
      const date: string = access(page, 'data.date');
      return (
        <Teaser
          title={title}
          teaser={teaser}
          date={date}
          path={page.path}
          isFirst={isFirst}
        />
      );
    }
    return undefined;
  }
}

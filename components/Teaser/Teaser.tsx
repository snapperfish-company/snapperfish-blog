import * as React from 'react';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { formatted } from '../../utils/date';
import * as classNames from 'classnames';

type Props = {
  title: string;
  path: string;
  teaser: string | undefined;
  date: string;
  isFirst?: boolean;
};

export class Teaser extends React.Component<Props, undefined> {
  public defaultProps = {
    isFirst: false,
  };

  public render() {
    const {
      title,
      teaser,
      date,
      path,
      isFirst,
    } = this.props;
    const styles = require('./teaser.module.scss');
    return (
      <article className={classNames(styles.self, { [styles.isFirst]: true })}>
        <h1 className={styles.title}>
          <Link className={styles.title_link} to={prefixLink(path)}>{title}</Link>
        </h1>
        <time className={styles.date} dateTime={date}>{formatted(date)}</time>
        {(teaser) ? <p>{teaser}</p> : null}
      </article>
    );
  }
}

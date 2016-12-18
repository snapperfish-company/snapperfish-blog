import * as React from 'react';
import * as classNames from 'classnames';

type Props = {
  offset: number;
  limit: number;
  total: number;
};

export class Pagination extends React.Component<Props, undefined> {
  public render() {
    const { offset, limit, total } = this.props;

    // total = 1 limit = 10

    console.log(offset, limit, total);

    if (total < 1) {
      return null;
    }

    const activeIndex = offset;

    const pages = Math.ceil(total / limit);

    console.log(pages);


    return (
      <div>{this.createPages(pages, offset)}</div>
    );
  }

  protected createPages(total, active): JSX.Element[] {
    const markup = [];

    for (let i = 0; i < total; i++) {
      markup.push(<div className={classNames({ active: i === active })}>{i + 1}</div>);
    }

    return markup;
  }
}

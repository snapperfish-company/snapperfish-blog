import test from 'ava';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Pagination } from '../Pagination';

test('Empty Pagination', (t) => {
  const pagination = shallow(
    <Pagination
      offset={0}
      limit={10}
      total={0}
    />
  );

  t.is(pagination.equals(null), true);
});

test('Single Page', (t) => {
  const pagination = shallow(
    <Pagination
      offset={0}
      limit={10}
      total={1}
    />,
  );
  t.is(pagination.length, 1);
});


test('Multiple Pages', (t) => {
  const pagination = shallow(
    <Pagination
      offset={0}
      limit={10}
      total={30}
    />,
  );

  t.is(pagination.children().length, 3);
});

test('Page One should be active', (t) => {
  const pagination = shallow(
    <Pagination
      offset={0}
      limit={10}
      total={30}
    />,
  );

  const first = pagination.find('.active');
  t.is(first.props().children, 1);
});

test('Page Two should be active', (t) => {
  const pagination = shallow(
    <Pagination
      offset={1}
      limit={10}
      total={30}
    />,
  );

  const first = pagination.find('.active');
  t.is(first.props().children, 2);
});

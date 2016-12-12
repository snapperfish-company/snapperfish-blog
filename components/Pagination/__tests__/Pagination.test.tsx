import test from 'ava';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Pagination } from '../Pagination';

test('Test pagination', (t) => {
  const pagination = shallow(<Pagination />);
  t.is(pagination.contains(<div>Hello World</div>), true);
});

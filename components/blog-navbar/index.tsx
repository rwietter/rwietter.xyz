import React from 'react';
import Link from 'next/link';
import Query from '../query';

import CATEGORIES_QUERY from '../../queries/category/categories';
import { NavItems } from './styles';

const Navbar = () => (
  <Query query={CATEGORIES_QUERY} id={null}>
    {({ data: { categories } }: any) => (
      <NavItems>
        {categories.data.map((category: any) => (
          <li key={category.attributes.slug}>
            <Link
              href={`/blog/category/${category.attributes.slug}`}
            >
              {category.attributes.name}
            </Link>
          </li>
        ))}
      </NavItems>
    )}
  </Query>
);

export default Navbar;

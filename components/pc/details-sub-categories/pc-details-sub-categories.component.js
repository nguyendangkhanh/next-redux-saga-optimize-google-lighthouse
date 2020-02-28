import React from 'react';
import { Link } from '../../../server/routes';

import PcLayout from '../layout/pc-layout.component';

import './pc-details-sub-categories.styles.scss';
const PcDetailsSubCategories = ({ code }) => {
  return (
    <PcLayout>
      Danh Sách Sản Phẩm Với Slug:{code} <br />
      <Link route={`/${code}/tap-1`} params={{ slug: 'tap-1' }}>
        <a>Sách Tập 1</a>
      </Link>
      <br />
      <Link route={`/${code}/tap-2`} params={{ slug: 'tap-2' }}>
        <a>Sách Tập 2</a>
      </Link>
    </PcLayout>
  );
};
export default PcDetailsSubCategories;

import React from 'react';

import { Link } from '../../../server/routes';

import PcLayout from '../layout/pc-layout.component';

import './pc-details-categories.styles.scss';

const PcDetailsCategories = ({}) => {
  return (
    <PcLayout>
      Các Loại Sách Đang Bán:
      <br />
      <Link route="/tieng-anh">
        <a>Sách Tiếng Anh</a>
      </Link>
      <br />
      <Link route="/tieng-hoa">
        <a>Sách Tiếng Hoa</a>
      </Link>
    </PcLayout>
  );
};

export default PcDetailsCategories;

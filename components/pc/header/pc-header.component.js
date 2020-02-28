import React from 'react';
import { Link } from '../../../server/routes';

import './pc-header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link route="/">
        <a className="logo">BÁN SÁCH</a>
      </Link>

      <div className="header-right">
        <Link route="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link route={'/danh-sach-san-pham'} passHref>
          <a className="nav-link">Danh Sách Sản Phẩm</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;

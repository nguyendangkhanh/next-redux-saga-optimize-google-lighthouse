import React from 'react';
import Header from '../header/pc-header.component';
import Footer from '../footer/pc-footer.component';

import './pc-layout.styles.scss';
export default function PcLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

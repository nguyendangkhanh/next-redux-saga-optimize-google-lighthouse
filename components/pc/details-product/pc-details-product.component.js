import React from 'react';
import PcLayout from '../layout/pc-layout.component';
import './pc-details-product.styles.scss';
const PcDetailsProduct = ({ slug }) => {
  return <PcLayout>Chi tiết sản phẩm với url: {slug}</PcLayout>;
};

export default PcDetailsProduct;

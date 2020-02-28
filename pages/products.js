import React from 'react';
import dynamic from 'next/dynamic';
///////////////////////////////////////////////////////////////////
import withMetaData from '../redux/providers/withMetaData';
///////////////////////////////////////////////////////////////////
import _ from 'lodash';
///////////////////////////////////////////////////////////////////
const PcDetailsProduct = dynamic(() => import('../components/pc/details-product/pc-details-product.component'));
const MobileDetailsProduct = dynamic(() =>
  import('../components/mobile/details-product/mobile-details-product.component'),
);
const DetailsProduct = props => {
  let { slug, isMobile, getDataDhis2 } = props;
  if (isMobile === true && !getDataDhis2) {
    return <MobileDetailsProduct {...props} />;
  } else if (isMobile === false && !getDataDhis2) {
    return <PcDetailsProduct {...props} />;
  }
  return (
    <>
      <div className="loadingPage">Loading&#8230;</div>
    </>
  );
};
DetailsProduct.getInitialProps = async ({ ctx }) => {
  let {
    query: { slug },
  } = ctx;

  return { slug };
};
export default withMetaData(DetailsProduct);

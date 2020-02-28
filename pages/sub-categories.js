import React from 'react';
import dynamic from 'next/dynamic';
import _ from 'lodash';

import withMetaData from '../redux/providers/withMetaData';

///////////////////////////////////////////////////////////////////
const PcDetailsSubCategories = dynamic(() =>
  import('../components/pc/details-sub-categories/pc-details-sub-categories.component'),
);
const MobileDetailsSubCategories = dynamic(() =>
  import('../components/mobile/details-sub-categories/mobile-details-sub-categories.component'),
);

const DetailSubCategories = ({ err, isMobile, asPath, getDataDhis2 }) => {
  if (err) {
    return <ErrorPage statusCode={err.statusCode} />;
  }
  if (isMobile === true && !getDataDhis2) {
    return <MobileDetailsSubCategories code={asPath.replace('/', '')} />;
  } else if (isMobile === false && !getDataDhis2) {
    return <PcDetailsSubCategories code={asPath.replace('/', '')} />;
  }
  return (
    <>
      <div className="loadingPage">Loading&#8230;</div>
    </>
  );
};

DetailSubCategories.getInitialProps = async ({ ctx }) => {
  let { asPath } = ctx;
  return { asPath };
};
export default withMetaData(DetailSubCategories);

import React from 'react';
import ErrorPage from 'next/error';
import _ from 'lodash';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';

///////////////////////////////////////////////////////////////////
import withMetaData from '../redux/providers/withMetaData';

const PcDetailsCategories = dynamic(() =>
  import('../components/pc/details-categories/pc-details-categories.component'),
);
const MobileDetailsCategories = dynamic(() =>
  import('../components/mobile/details-categories/mobile-details-categories.component'),
);

const DetailCategories = ({ err, isMobile, asPath, getDataDhis2 }) => {
  if (err) {
    return <ErrorPage statusCode={err.statusCode} />;
  }
  if (isMobile === true && !getDataDhis2) {
    return <MobileDetailsCategories code={asPath.replace('/', '')} />;
  } else if (isMobile === false && !getDataDhis2) {
    return <PcDetailsCategories code={asPath.replace('/', '')} />;
  }
  return (
    <>
      <div className="loadingPage">Loading&#8230;</div>
    </>
  );
};

DetailCategories.getInitialProps = async ({ ctx }) => {
  let { asPath } = ctx;
  return { asPath };
};
export default withRouter(withMetaData(DetailCategories));

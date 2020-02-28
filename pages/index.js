import React from 'react';
import dynamic from 'next/dynamic';
///////////////////////////////////////////////////////////////////
import withMetaData from '../redux/providers/withMetaData';
///////////////////////////////////////////////////////////////////
import _ from 'lodash';
///////////////////////////////////////////////////////////////////
const PcPage = dynamic(() => import('../components/pc/page/pc-page.component'));
const MobilePage = dynamic(() => import('../components/mobile/page/mobile-page.component'));

const Home = ({ isMobile, getDataDhis2 }) => {
  if (isMobile === true && !getDataDhis2) {
    return <MobilePage />;
  } else if (isMobile === false && !getDataDhis2) {
    return <PcPage />;
  }
  return (
    <>
      <div className="loadingPage">Loading&#8230;</div>
    </>
  );
};
export default withMetaData(Home);

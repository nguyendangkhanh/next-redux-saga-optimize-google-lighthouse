import React from 'react';

import Header from '../header/mobile-header.component';

import { GlobalStyles } from '../../../shared/global-styles';

const MobileLayout = props => {
  return (
    <Grid container direction="column" justify="center">
      <GlobalStyles />
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 48 }} className="noPadding">
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <MobileFooter />
      </Grid>
    </Grid>
  );
};

export default MobileLayout;

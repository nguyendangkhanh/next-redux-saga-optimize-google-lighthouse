import React from 'react';
import Router from 'next/router';

const Error = props => {
  return (
    <>
      <h1>Custom error page: {props.statusCode}</h1>
      <p>{props.message}</p>
    </>
  );
};
Error.getInitialProps = async ({ Component, router, ctx, req, res }) => {
  if (typeof window === 'undefined') {
  }
  return {};
};
export default Error;

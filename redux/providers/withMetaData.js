import { connect } from 'react-redux';
import '../actions';

const withMetaData = WrappedComponent => {
  return connect(
    mapStateToProps,
    null,
  )(WrappedComponent);
};

const mapStateToProps = state => {
  const { isMobile } = state;
  return { isMobile };
};
export default withMetaData;

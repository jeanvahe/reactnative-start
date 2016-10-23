import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main';
import * as actionCreators from '../actions/action';

class MainContainer extends React.Component {
  static componentDidMount() {
  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { reducer } = state;
  return {
    reducer 
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    actions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

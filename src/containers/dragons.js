import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Creators as DragonsActions } from '../store/ducks/dragons';

const mapStateToProps = ({ dragons }) => ({ dragons });

const mapDispatchToProps = dispatch => ({
  getDragons: () => dispatch(DragonsActions.getDragons()),
});

let isNew = true;

export default function withDragons(WrappedComponent) {
  const WithDragonsComponent = (props) => {
    useEffect(() => {
      if (isNew) {
        props.getDragons();
      }

      isNew = false;
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  WithDragonsComponent.propTypes = {
    getDragons: PropTypes.func.isRequired,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithDragonsComponent);
}

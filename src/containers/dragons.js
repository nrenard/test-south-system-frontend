import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Creators as DragonsActions } from "../store/ducks/dragons";

const mapStateToProps = ({ dragons }) => ({ dragons });

const mapDispatchToProps = dispatch => ({
  getDragons: () => dispatch(DragonsActions.getDragons())
});

let isNew = true;

export default function withDragons(WrappedComponent) {
  const WithDragonsComponent = props => {
    useEffect(() => {
      if (isNew && !props.dragons.list) {
        props.getDragons();
      }

      isNew = false;
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithDragonsComponent);
}

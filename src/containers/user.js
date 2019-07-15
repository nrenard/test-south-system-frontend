import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Creators as UserActions } from '../store/ducks/user';

import { getUser, isAuthenticated } from '../helpers/auth';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  loginRequestSuccess: user => dispatch(UserActions.loginRequestSuccess(user)),
  logoutRequest: () => dispatch(UserActions.logoutRequest()),
});

let isNew = true;

export default function withUser(WrappedComponent) {
  const WithUserComponent = (props) => {
    useEffect(() => {
      if (isNew && !props.user.detail && isAuthenticated()) {
        const userStorage = getUser();
        props.loginRequestSuccess(userStorage);
      }

      isNew = false;
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  WithUserComponent.propTypes = {
    loginRequestSuccess: PropTypes.func.isRequired,
    user: PropTypes.shape({
      detail: PropTypes.object,
    }),
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithUserComponent);
}

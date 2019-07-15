import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function ScrollToChangePage({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}

ScrollToChangePage.propTypes = {
  location: PropTypes.shape({
    path: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(ScrollToChangePage);

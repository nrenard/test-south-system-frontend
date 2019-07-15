import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withDragons from '../../containers/dragons';

import Loader from '../Loader';

import defaultDragon from '../../images/defaultDragon.svg';

import {
  Container, List, Dragon, DragonImgWrapper, DragonImg,
} from './styles';

function DragonList({ dragons: { list, loading } }) {
  return (
    <Container>
      {loading || !list ? (
        <Loader />
      ) : (
        <List>
          {list.map(dragon => (
            <Dragon key={dragon.id}>
              <Link to={`/dragon/${dragon.id}`}>
                <DragonImgWrapper>
                  <DragonImg src={defaultDragon} alt={dragon.name} />
                </DragonImgWrapper>

                <strong>{dragon.name}</strong>

                <span>
                  <small>tipo: </small>
                  {dragon.type}
                </span>
              </Link>
            </Dragon>
          ))}
        </List>
      )}

      {!loading && list && !list.length && <p>Nenhum dragão encontrado :'(</p>}
    </Container>
  );
}

DragonList.propTypes = {
  dragons: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        type: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool,
  }).isRequired,
};

export default withDragons(DragonList);

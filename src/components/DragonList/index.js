import React from "react";
import { Link } from "react-router-dom";

import withDragons from "../../containers/dragons";

import Loader from "../Loader";

import defaultDragon from "../../images/defaultDragon.svg";

import { Container, List, Dragon, DragonImgWrapper, DragonImg } from "./styles";

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

export default withDragons(DragonList);

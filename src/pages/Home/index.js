import React from 'react';
import { Link } from 'react-router-dom';

import TitlePages from '../../components/TitlePages';
import DragonList from '../../components/DragonList';
import Button from '../../components/Button';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <TitlePages title="Dragões">
        <Link to="/new">
          <Button>Adicionar dragão</Button>
        </Link>
      </TitlePages>

      <DragonList />
    </Container>
  );
}

export default Home;

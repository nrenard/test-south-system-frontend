import React from "react";

import TitlePages from "../../components/TitlePages";
import DragonList from "../../components/DragonList";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <TitlePages title="Dragões" />

      <DragonList />
    </Container>
  );
}

export default Home;

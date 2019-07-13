import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Creators as DragonsActions } from "../../store/ducks/dragons";

import Loader from "../../components/Loader";
import TitlePages from "../../components/TitlePages";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import api from "../../services/api";
import * as notifier from "../../helpers/notifier";
import { toLocaleString } from "../../helpers/date";

import { Container, WrapperButtons } from "./styles";
import theme from "../../styles/theme";

let redirectTimeout = null;

export default function Dragon({ history, match }) {
  const dragonId = match.params.id;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getDragon = useCallback(async () => {
    if (dragonId) {
      setLoading(true);

      try {
        const dragon = await api.get(`/${dragonId}`);

        if (dragon) {
          setName(dragon.name);
          setType(dragon.type);
          setDate(toLocaleString(dragon.createdAt));
        }
      } catch (err) {
        notifier.error();
        redirectTimeout = setTimeout(() => history.push("/"), 2000);
      } finally {
        setLoading(false);
      }
    }
  }, [dragonId, history]);

  useEffect(() => {
    getDragon();
  }, [getDragon]);

  useEffect(
    () => () => {
      clearTimeout(redirectTimeout);
    },
    []
  );

  const submitDragon = event => {
    if (event) event.preventDefault();

    if (dragonId) {
      dispatch(DragonsActions.updateDragon({ id: dragonId, name, type }));
    } else {
      dispatch(DragonsActions.addDragon({ name, type }));
    }
  };

  const deleteDragon = () => {
    dispatch(DragonsActions.deleteDragon({ id: dragonId, name }));
  };

  const title = dragonId
    ? `Está editando o ${name}.`
    : `Está criando ${!!name ? `o ${name}` : "um dragão"}`;

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TitlePages title={title}>
            {dragonId && (
              <Button color={theme.errorColor} onClick={deleteDragon}>
                Excluir
              </Button>
            )}
          </TitlePages>

          <Form onSubmit={submitDragon}>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              required={true}
              placeholder="Nome do dragão"
              name="name"
              autoFocus
            />
            <Input
              value={type}
              onChange={event => setType(event.target.value)}
              required={true}
              placeholder="Tipo do dragão"
              name="type"
            />

            {dragonId && <Input value={date} readOnly name="createdAt" />}

            <WrapperButtons>
              <Link to="/">
                <Button type="button" color={theme.lightGray}>
                  Voltar
                </Button>
              </Link>

              <Button type="submit">salvar</Button>
            </WrapperButtons>
          </Form>
        </>
      )}
    </Container>
  );
}

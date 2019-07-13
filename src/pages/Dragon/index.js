import React, { useState, useEffect, useCallback } from "react";

import Loader from "../../components/Loader";
import TitlePages from "../../components/TitlePages";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import api from "../../services/api";
import * as notifier from "../../helpers/notifier";

import { Container, WrapperButtons } from "./styles";

let redirectTimeout = null;

const updateDragon = async ({ id, ...data }) => api.put(`/${id}`, data);

export default function Dragon({ history, match }) {
  const dragonId = match.params.id;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [created, setCrated] = useState("");
  const [loading, setLoading] = useState(false);

  const getDragon = useCallback(async () => {
    if (dragonId) {
      setLoading(true);

      try {
        const dragon = await api.get(`/${dragonId}`);

        if (dragon) {
          setName(dragon.name);
          setType(dragon.type);
          setCrated(dragon.createdAt);
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

  const submitDragon = async event => {
    if (event) event.preventDefault();

    try {
      await updateDragon({ id: dragonId, name, type });
      notifier.success(`O dragão ${name} foi atualizado.`);
    } catch (err) {
      console.log("err: ", err);
      notifier.error();
    }
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
          <TitlePages title={title} />

          <Form onSubmit={submitDragon}>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              required={true}
              placeholder="Nome do dragão"
              name="name"
            />
            <Input
              value={type}
              onChange={event => setType(event.target.value)}
              required={true}
              placeholder="Tipo do dragão"
              name="type"
            />
            {dragonId && <Input value={created} readOnly name="createdAt" />}

            <WrapperButtons>
              <Button type="submit">salvar</Button>
              <Button type="submit">salvar</Button>
            </WrapperButtons>
          </Form>
        </>
      )}
    </Container>
  );
}

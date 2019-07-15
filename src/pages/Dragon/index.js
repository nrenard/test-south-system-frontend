import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Creators as DragonsActions } from '../../store/ducks/dragons';

import Loader from '../../components/Loader';
import TitlePages from '../../components/TitlePages';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';
import * as notifier from '../../services/notifier';

import { toLocaleString } from '../../helpers/date';

import { Container, WrapperButtons } from './styles';
import theme from '../../styles/theme';

let redirectTimeout = null;

function Dragon({ history, match }) {
  const dragonId = match.params.id;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getDragon = useCallback(async () => {
    if (dragonId) {
      try {
        const dragon = await api.get(`/${dragonId}`);

        if (dragon) {
          setName(dragon.name);
          setType(dragon.type);
          setDate(toLocaleString(dragon.createdAt));
        }
      } catch (err) {
        notifier.error();
        redirectTimeout = setTimeout(() => history.push('/'), 2000);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [dragonId, history]);

  useEffect(() => {
    getDragon();
  }, [getDragon]);

  useEffect(
    () => () => {
      clearTimeout(redirectTimeout);
    },
    [],
  );

  const submitDragon = (event) => {
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
    : `Está criando ${name ? `o ${name}` : 'um dragão'}`;

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
              required
              placeholder="Nome do dragão"
              name="name"
              autoFocus
            />
            <Input
              value={type}
              onChange={event => setType(event.target.value)}
              required
              placeholder="Tipo do dragão"
              name="type"
            />

            {dragonId && (
              <Input
                value={date}
                readOnly
                name="createdAt"
                placeholder="Data de criação"
                onChange={() => {}}
              />
            )}

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

Dragon.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Dragon;

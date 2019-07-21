import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardWall from '../../components/CardCascade/CardWall/CardWall';
import Card from '../../components/CardCascade/Card/Card';
import { PlayCard } from '../../reducers/playCards/playCards';
import { FreeCell } from '../../reducers/freeCell/freeCell';
import { fillCardCascades } from '../../actions/freeCell/freeCell';

const useStyles = makeStyles({
  root: {

  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  const playCards = useSelector((
    state: { playCardsReducer: { playCards: PlayCard[] } },
  ): PlayCard[] => state.playCardsReducer.playCards);

  const freeCell = useSelector((
    state: { freeCellReducer: FreeCell },
  ): FreeCell => state.freeCellReducer);

  const dispatch = useDispatch();

  useEffect((): void => {
    const first = playCards.slice(0, 7).reverse();
    const second = playCards.slice(7, 14).reverse();
    const third = playCards.slice(14, 21).reverse();
    const fourth = playCards.slice(21, 28).reverse();
    const fifth = playCards.slice(28, 34).reverse();
    const sixth = playCards.slice(34, 40).reverse();
    const seventh = playCards.slice(40, 46).reverse();
    const eighth = playCards.slice(46, 52).reverse();

    dispatch(fillCardCascades({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
    }));
  }, []);

  const [cards, setCards] = useState([
    { id: 1, name: 'issue 1', status: 'todo' },
    { id: 2, name: 'issue 2', status: 'test' },
    { id: 3, name: 'issue 3', status: 'develop' },
    { id: 4, name: 'issue 4', status: 'develop' },
  ]);

  const updateCardStatus = (cardId: number, targetStatus: string): void => {
    const targetIndex = cards.findIndex((card): boolean => card.id === cardId);

    Object.assign(cards[targetIndex], { status: targetStatus });

    const targetCard = cards.splice(targetIndex, 1)[0];

    setCards([
      ...cards,
      targetCard,
    ]);
  };

  (window as any).updateCardStatus = updateCardStatus;

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {['todo', 'develop', 'test', 'deploy'].map((status): JSX.Element => (
            <CardWall key={status} status={status} updateCardStatus={updateCardStatus}>
              {cards.filter((card): boolean => card.status === status)
                .map((card): JSX.Element => (
                  <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    status={card.status}
                  />
                ))}
            </CardWall>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardWall from '../../components/CardCascad/CardWall/CardWall';
import Card from '../../components/CardCascad/Card/Card';

const useStyles = makeStyles({
  root: {

  },
  board: {

  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

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
      <Container maxWidth={false} className={classes.board}>
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

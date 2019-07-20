import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card, { DragItemI } from '../Card/Card';

const useStyles = makeStyles({
  root: {
    border: '1px solid red',
  },
  cardWallWrapper: {

  },
  cardWallContent: {

  },
});

interface Props {
  status: string;
  children: ReactNode;
  updateCardStatus: (cardId: number, targetStatus: string) => void;
}

export default function CardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      props.updateCardStatus(item.id, props.status);
    },
    canDrop: (item: DragItemI): boolean => item.status !== props.status,
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Grid ref={drop} item xs={6} sm={3} className={classes.root}>
      <p>{props.status}</p>
      <div className={classes.cardWallContent}>
        {props.children}

        {isOver && canDrop && <Card id={0} name={''} status={''} empty />}
      </div>
    </Grid>
  );
}

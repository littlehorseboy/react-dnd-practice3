import React from 'react';
import { useDrag, DragObjectWithType } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 50,
    border: '1px solid blue',
    opacity: 1,
    '&.isDragging': {
      opacity: 0.3,
    },
    '&.empty': {
      backgroundColor: '#C9C9C9',
      '& > *': {
        display: 'none',
      },
    },
  },
});

interface Props {
  id: number;
  name: string;
  status: string;
  empty?: boolean;
}

export interface DragItemI extends DragObjectWithType {
  id: number;
  status: string;
}

export default function Card(props: Props): JSX.Element {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id: props.id, status: props.status },
    collect: (monitor): { isDragging: boolean } => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classNames(
      classes.root,
      { isDragging },
      { empty: props.empty },
    )}>
      { props.name }
    </div>
  );
}

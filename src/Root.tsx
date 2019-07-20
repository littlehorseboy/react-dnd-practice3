import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Main from './pages/Main/Main';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Main />
      </DndProvider>
    </>
  );
}

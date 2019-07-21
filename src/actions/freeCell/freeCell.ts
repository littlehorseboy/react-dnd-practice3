import { CardCascadesI } from '../../reducers/freeCell/freeCell';

export const FILLCARDCASCADES = 'FILLCARDCASCADES';

interface FillCardCascadesActionI {
  type: typeof FILLCARDCASCADES;
  payload: {
    cardCascades: CardCascadesI;
  };
}

export const fillCardCascades = (cardCascades: CardCascadesI): FillCardCascadesActionI => ({
  type: FILLCARDCASCADES,
  payload: {
    cardCascades,
  },
});

export type FreeCellActionTypes = FillCardCascadesActionI;

import { PlayCard } from '../playCards/playCards';
import { FILLCARDCASCADES, FreeCellActionTypes } from '../../actions/freeCell/freeCell';

export interface CardCascadesI {
  first: null[] | PlayCard[];
  second: null[] | PlayCard[];
  third: null[] | PlayCard[];
  fourth: null[] | PlayCard[];
  fifth: null[] | PlayCard[];
  sixth: null[] | PlayCard[];
  seventh: null[] | PlayCard[];
  eighth: null[] | PlayCard[];
}

export interface FreeCell {
  emptyCell: null[] | PlayCard[];
  cardCascades: CardCascadesI;
  foundations: {
    first: null[] | PlayCard[];
    second: null[] | PlayCard[];
    third: null[] | PlayCard[];
    fourth: null[] | PlayCard[];
  };
}

// 遞迴取第一個 遞迴往前算 canDrag

const initState: FreeCell = {
  // 空白區: 4 張的位置自由擺放牌組，影響遊戲區拖放數量
  emptyCell: [null, null, null, null],
  // 遊戲區：8 個亂數牌區隨機擺放 52 張 (4 個區各擺放 7 張，4 個區各擺放 6 張)
  cardCascades: {
    first: [],
    second: [],
    third: [],
    fourth: [],
    fifth: [],
    sixth: [],
    seventh: [],
    eighth: [],
  },
  // 所有的牌移動到此區後，即完成遊戲
  foundations: {
    first: [],
    second: [],
    third: [],
    fourth: [],
  },
};

const reducer = (state = initState, action: FreeCellActionTypes): FreeCell => {
  switch (action.type) {
    case FILLCARDCASCADES:
      return {
        emptyCell: state.emptyCell,
        cardCascades: {
          ...action.payload.cardCascades,
        },
        foundations: state.foundations,
      };
    default:
      return state;
  }
};

export default reducer;

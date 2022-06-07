// 액션 생성 함수를 더 짧은 코드로 작성할 수 있게 해준다.
// 리듀서를 작성할 때 switch문이 아닌 handleActions라는 함수를 사용할 수 있게 해준다.
import {createActions, handleActions} from "redux-actions";

// 모듈 이름 / 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createActions(INCREASE);
export const decrease = createActions(DECREASE);

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);

export default counter;

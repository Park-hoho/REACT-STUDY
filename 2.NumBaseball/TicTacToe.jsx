import React, {useState, useReducer, useCallback} from "react";
import Table from "./Table";

const initialState = {
  winner: '',
  turn: 'o',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
}

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner 이렇게 하면 안됨.
      return {
        ...state, // 객체를 새롭게 복사하는 문법
        winner: action.winner,
      }
  }
}

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
      dispatch({ type: SET_WINNER, winner: 'O' });  // action 실행하면 reducer 가 실행됨
    }, [],);


  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  )
}

export default TicTacToe;

// state 가 많아지면 관리가 힘드어지니까 이걸 useReducer 로 관리한다.
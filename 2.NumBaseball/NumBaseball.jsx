import React, { PureComponent, createRef } from 'react';
// const React = require('react');
// const { Component } = React;

import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumBaseball extends PureComponent {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [], // push 쓰면 안된다. / 예전값과 지금 값이 바뀌어야 랜더함수가 실행이됨. push 하면 그냥 원래 배열에 값만 들어가는거라 랜더가 실행이 안됨.
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      this.setState((prevState) => { // 옛날 배열할때 함수형 setState로 만들기. / setState 함수형
        // 다른동작
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: this.state.value, result: '홈런!' }], // [예전함수복사, 넣기]
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      this.inputRef.current.focus();
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          value: '',
          tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef(); // 두가지 방법이 있음 / this.inputRef

  // onInputRef = (c) => {
  //   this.inputRef = c;
  // }

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangInput}/>
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
          {tries.map((v, i) => (
            // Try로 빼는 이유: 성능, 가독성 해결하기위해 + 재사용성. / 보통은 반 복문 단위로 나눔 제일 만만해서
            <Try key={`${i + 1}차 시도 :`} tryInfo={v} /> // value, index는 react에서 props라고 불림
          ))}
        </ul>
      </>
    );
  }
}

export default NumBaseball; // module.exports = NumBaseball;
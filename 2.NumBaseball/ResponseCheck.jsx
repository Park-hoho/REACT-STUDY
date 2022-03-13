import React, { Component } from "react";
import NumBaseball from "./NumBaseball";

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };

  timeout;
  startTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        // class 에서는 timeout 적어줬는데 Hooks 로 표현할때는 Ref를 쓴다. / Ref는 DOM에 직접 접근할때만 썼었는데
        // const timeOut = userRef(null); 하고 timeout.current = setTimeout(() => {...

        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
      })
    } else if (state === 'now') { // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime],
        }
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    })
  }

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {/* 리액트 안에서의 조건문 / 함수로 빼는 방법도 있다. */}
        {this.state.result.length === 0
          ? null
          : <>
            <div>평균 시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
            <button onClick={this.onReset}>리셋</button>
          </>
        }
      </>
    );
  };
}

export default ResponseCheck;

// jsx 는 return 안에서 for 이랑 if를 못쓴다. / 쓸수있는 방법은 있는데 복잡해짐
// false, undefined, null 은 jsx 에서 태그없음을 의미한다.

// 불필요한 렌더링은 막아야한다.
// useState 와 useRef 의 차이 : useState 는 바뀌면 return 부분이 다시 렌더링이 됨. useRef 는 다시 렌더링이 안됨.
// 결론은 화면에 영향을 미치고 싶지 않을떄는 Ref 를 쓰면 된다.
// Ref 쓸 때 current 를 붙여줘야한다. 신경써야함
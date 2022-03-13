import React, { useState, useRef } from "react";
import NumBaseball from "./NumBaseball";

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(this.timeout);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevState) => {
        return [...prevState.result, endTime.current - startTime.current]
      });
    }
  }

  const onReset = () => {
    setResult([]);
  }

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <>
        <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {/*느낀점 : 즉시실행 함수로 반복문이나 조건문 넣는것보다 따로 빼서 쓰거나 map 함수로 반복문 만들거나 하는게 훨 낫다*/}
      {(() => {
        if (result.length === 0) {
          return null;
        } else {
          return <>
            <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
            <button onClick={onReset}>리셋</button>
          </>
        }
      })()}
      {/*{renderAverage()}*/}
    </>
  );
}

export default ResponseCheck;

// jsx 는 return 안에서 for 이랑 if를 못쓴다. / 쓸수있는 방법은 있는데 복잡해짐
// false, undefined, null 은 jsx 에서 태그없음을 의미한다.

// 불필요한 렌더링은 막아야한다.
// useState 와 useRef 의 차이 : useState 는 바뀌면 return 부분이 다시 렌더링이 됨. useRef 는 다시 렌더링이 안됨.
// 결론은 화면에 영향을 미치고 싶지 않을떄는 Ref 를 쓰면 된다.
// Ref 쓸 때 current 를 붙여줘야한다. 신경써야함
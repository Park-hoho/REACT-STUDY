import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  // useMemo 는 return 된 값을 기억한다. / hooks 는 순서가 매우 중요
  // 조건문 안에 절대 넣으면 안 되고, 함수나 반복문 안에도 웬만하면 넣지 마라
  const lottoNumbers = useMemo(() => getWinNumbers(), []); // getWinNumbers 가 다시 실행되지 않고 기억할 수 있게 useMemo 로 설정 / 두번째 인자에 내용이 바뀌지 않는한 getWinNumbers 가 다시 실해되지 않음
  const [winBalls, setWinBalls] = useState([]);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  // useEffect 에 대한 이해는 6-6 Hooks에 대한 자잘한 팁들 12분 보기기
 useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 500);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 3500);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행
  // useEffect 많이 찾아보기

  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);


  // 함수 자체를 기억한다. / 함수 생성 자체가 비용이 크다 이러면 사용. / useMemo 는 값을 useCallBack 은 함수를 기억 / 두번째 인자에 있는 값이 바뀔때 까먹어준다.(?)
  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};


export default Lotto;

// 함수안에 콘솔로그 하나씩 넣고 진짜 필요할때 실행되는 건지 확인하기



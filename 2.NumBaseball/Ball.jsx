import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let background;
  let color;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
    color = 'white';
  } else {
    background = 'green';
  }

  return (
    <div className="ball" style={{ background, color }}>{number}</div>
  )
});

export default Ball;

// 여기에 적힌건 hooks 가 아니다. 그냥 함수 컴포넌트 hooks 는 useState, useEffect 를 적용한 것

// hoc
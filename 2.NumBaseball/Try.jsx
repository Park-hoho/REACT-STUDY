import React, { PureComponent, memo, useState } from 'react';

// const Try = memo(({ tryInfo }) => {
//   // const [result, setResult] = useState(tryInfo.result);
//   //
//   const onClick = () => {
//     console.log(1);
//     // setResult('1');
//   };
//
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{tryInfo.result}</div>
//     </li>
//   );
// });

class Try extends PureComponent {
  // ex) props 는 부모가 바꿔야지 자식이 바꾸면 안된다. / 가끔 바꿔야할때가 있는데 이건 아레 코드처럼 state에 넣어준다.
  // constructor(props) {
    // super(props);

    // const filtered = this.props.filter(() => {
    //
    // });
    // this.state = {
    //   result: filtered,
    // }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li> // key에 i만 넣지말고 차라리 문자열 더 붙여라, react에서 key를 기준으로 엘리먼트를 추가하거나 수정 삭제 판단하기 떄문에 배열의 순서가 바뀌면 문제가 생기므로...
    );
  }
 }

export default Try;
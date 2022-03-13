import React, { PureComponent } from "react";

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

class RSP extends PureComponent {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  }

  // React 의 라이프 사이클
  interval;
  componentDidMount() { // 컴포넌트가 첫 렌더링된 후 실행, 여기에 비동기 요청을 많이 한다. 예를 들어 setInterval 가 계속 돌아가면 꺼줘야함
    // this.interval = setInterval(() => {
    //   console.log('22');
    // }, 1000);
  }

  componentDidUpdate() { // 리랜더링

  }

  componentWillUnmount() { // 컴포넌트가 제거되기 직전 실행, 비동기 요청 정리를 많이 한다.
    // clearInterval(this.interval);
  }

  calculationScore = () => {
    const x = this.state.score;
    return x + 1;
  };

  onScoreClick = (val) => () => { // onClcik 에서 {() => {함수}} 일때 '() =>' 이 부분을 여기에 넣어줄 수 있다. / 고차함수
    console.log(val);
    this.setState({
      score: this.calculationScore(),
    })
  };

  render() {
    return (
      <>
        <div>하하</div>
        <button onClick={this.onScoreClick('클릭')}>클릭</button>
        <div>점수 : {this.state.score}</div>
      </>
    );
  }
}

export default RSP;

// 클래스에 항상 너무 많은걸 묶으려 하지 마라
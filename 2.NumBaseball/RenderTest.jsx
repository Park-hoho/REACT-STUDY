import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: [],
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log('랜더링', this.state)
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test;

// state랑 props가 바뀌어야 랜더링되는데 안바꿔도 setState만 호출해도 바뀐다.
// shouldComponentUpdate 로 어떤경우 랜더링 다시하는지 적어줄 수 있다.
// PureComponent 로 shouldComponentUpdate 를 대체할수 있다. 단점은 객체나 배열은 값 변경되는걸 파악하는게 어려움.
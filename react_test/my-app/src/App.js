import './App.css';
import {useRef, useState} from "react";

function Todo({ todoList }) {

  const deleteTodo = (id) => {

  }

  const editTodo = (id) => {

  }

  return (
    <li>
      <b>{todoList.todo}</b> <span>({todoList.endDate})</span>
      <button onClick={editTodo(todoList.id)}>수정</button>
      <button onClick={deleteTodo(todoList.id)}>삭제</button>
    </li>
  );
}

function App() {
  const [inputs, setInputs] = useState({
    todo: '',
    endDate: '',
  });
  //const { todo, endDate } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  }

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "할일 만들기",
      endDate: "2022-01-02",
    },
    {
      id: 2,
      todo: "리액트 공부",
      endDate: "2022-01-02",
    },
    {
      id: 3,
      todo: "스프링도 공부해야해 ㅠㅠ",
      endDate: "2022-01-02",
    },
  ]);
  const nextId = useRef(4);

  const onCreateTodo = () => {
    // 객체로 만들기
    const todoItem = {
      id: nextId.current,
      todo: inputs.todo,
      endDate: inputs.endDate
    };
    // 데이터 추가
    //setTodoList([...todoList, todoItem]);
    setTodoList(todoList.concat(todoItem));
    // 화면 초기화 초기화
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  return (
    <div className="App">
      <h2 className="">Todo List</h2>

      <ul>
        {todoList.map(todo => (
          <Todo todoList={todo} key={todo.id} />
        ))}
      </ul>

      <form action="">
        <input name="todo" placeholder="할일" onChange={onChange} type="text" value={inputs.todo}/>
        <input name="endDate" placeholder="날짜" onChange={onChange} type="date" value={inputs.endDate}/>
        <button className="btn" onClick={onCreateTodo}>추가하기</button>
      </form>
    </div>
  );
}

export default App;

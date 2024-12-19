import React, { useState } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';


function App() {
    const initVal = [
        {
            id:1,
            text: '리액트 수업 복습',
            checked: true
        },
        {
            id:2,
            text: '리액트 프로젝트 기획',
            checked: true
        },
        {
            id:3,
            text: '데이터베이스 테스트',
            checked: true
        }
    ]
    const [todos, setTodos] = useState(initVal)

    console.log('todos: ', todos)
    // todos에 할일 객체를 추가 
    const handleInsert = (text) => {
        const todo = {
            id: todos.length +1,
            text , 
            checked: false
        }
        // todos에 새로운 todo를 추가해서 변경합니다. 
        setTodos(todos.concat(todo))
    }
    return (
     <>
            {/* <button onClick={() => handleInsert("테스트할일")}>할 일 추가</button> */}
            <button onClick={() => handleInsert("테스트할일")}>그러게</button>
        {/* 인자가 있을때에는 ()=> 함수를 써양 한다 .
            인자가 없을때에는 ()=> 안써도 된다. 여기서 인자는 ("테스트할일")
          */}
           
            <TodoTemplate>
                 <TodoInsert onInsert={handleInsert}/>
            </TodoTemplate>
     </>
       
    );
}

export default App;
import React, { useState } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoListItem from './component/TodoListItem';




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

    const handleChecked = (id) =>{
        //배열 자체를 바꿔야 상태 변경됩니다.
        // 배열 특정 요소의 checked 값만 변경한 것을 새로운 배열로 하여 todos 변경
        // ! 연산자는 참은 거짓, 거짓은 참으로 변경
        const newtodos=todos.map(
            (item) => item.id ===id ? {...item, checked: !item.checked} : item
        )
        // 상태가 바뀝니다.
        setTodos(newtodos)
    }

    // todos 할 일 객체  목록 중 삭제하기 
    const handleRemove = (id) => {
        // 인자로 전달받은 id 값을 갖는 요소 삭제하기 
        //인자 id 값이 아닌 요소로만 새로운 배열 만들기  
        const newtodos = todos.filter( (item)=> item.id !== id)
        setTodos(newtodos)
    }

    // todos에 할일 객체를 추가 
    const handleInsert = (text) => {
        const todo = {
            id: todos.length +1,
            text , 
            checked: false
        }
        // todos에 새로운 todo를 추가해서 변경합니다. 
        // 배열 요소 추가 push() 는 리터이 없고 todos 배열에 추가합니다. 
        // => todos 배열 자체가 바뀌는 것이 아닙니다. 변화 없음.  
        setTodos(todos.concat(todo))
        // odos.concat(todo) 는 새로운 배열을 리턴. state 변화. 결국은 재런더링 하게 된다.

    }
    const onTest = (id) =>{
        window.alert(id +'todo app 입니다.')
    } 
       

    return (
     <>
            {/* <button onClick={() => handleInsert("테스트할일")}>할 일 추가</button> */}
            <button onClick={() => handleInsert("테스트할일")}>할일 추가</button>
            <button onClick={() => handleRemove(1)}>할일 삭제 id=2</button>
            <button onClick={() => handleChecked(2)}>할일 체크 변경 id=2</button>
        {/* 인자가 있을때에는 ()=> 함수를 써양 한다 .
            인자가 없을때에는 ()=> 안써도 된다. 여기서 인자는 ("테스트할일")
          */}
            {/* todos.map() 을 싱행하는 컴포넌트. todos 없으면 오류 */}
            {/* <TodoList /> */}
            <TodoList todos={[]}/>
            <TodoList todos={[
                {id:1,
                    checked: true
                },
                { id:2,
                    checked:false
                }
            ]}/>


          
     </>
       
    );
}

export default App;
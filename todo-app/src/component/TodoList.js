import React from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
// () 쓰면 하나를 받는거고 
// {} 그중 에 하나를 받는거고 
function TodoList({todos}) {
    return (
        <div className='TodoList'>
            {/* ListItem을 반복해서 표시 */}
            {todos.map((item) => 
            <TodoListItem todo={item}/>
        )}
        </div>
    );
}

export default TodoList;
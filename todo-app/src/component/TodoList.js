import React from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
// () 쓰면 하나를 받는거고 
// {} 그중 에 하나를 받는거고 
function TodoList({todos,onRemove,onhecked}) {
    return (
        <div className='TodoList'>
            {/* ListItem을 반복해서 표시 */}
            {/* 항목 삭제 아이콘 TodoListItem 컴포넌트에 있음 */}
            {todos.map((item) => 
            <TodoListItem todo={item} onhecked={onhecked} onRemove={onRemove} key={item.id}/>
        )}
        </div>
    );
}

export default TodoList;
// todo-app-nextjs/src/pages/index.js
import React from 'react';
import TodoList from '../components/TodoList';

const IndexPage = () => {
    return (
        <div>
            <h1>ToDo List</h1>
            <TodoList />
            {/* ここにToDoアイテムを追加するためのフォームを追加 */}
        </div>
    );
};

export default IndexPage;

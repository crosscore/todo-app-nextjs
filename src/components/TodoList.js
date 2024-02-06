// todo-app-nextjs/src/components/TodoList.js
import React, { useState, useEffect } from 'react';

const TodoList = () => {
    // ToDoリストの状態管理
    const [todos, setTodos] = useState([]);

    // ToDoリストの取得
    useEffect(() => {
        fetch('/api/todos')  // APIエンドポイントを適切に設定
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.task}
                    {/* ここにステータス更新や編集リンクなどを追加 */}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

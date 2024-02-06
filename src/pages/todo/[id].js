// todo-app-nextjs/src/pages/todo/[id].js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TodoDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/todos/${id}`)  // APIエンドポイントを適切に設定
                .then(response => response.json())
                .then(data => setTodo(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);

    if (!todo) return <div>Loading...</div>;

    return (
        <div>
            <h1>ToDo Detail</h1>
            <p>Task: {todo.task}</p>
            {/* ここに編集や削除のフォームなどを追加 */}
        </div>
    );
};

export default TodoDetailPage;

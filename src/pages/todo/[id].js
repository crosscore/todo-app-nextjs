import React from 'react';
import { useRouter } from 'next/router';

const TodoDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>ToDo Detail</h1>
            {/* ここにToDo詳細表示と編集フォームを実装 */}
        </div>
    );
};

export default TodoDetailPage;

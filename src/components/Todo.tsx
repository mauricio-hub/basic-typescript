
import React from 'react';

type TodoStatus = 'active' | 'inactive';

interface TodoProps {
    todo: string;
    status?: TodoStatus;
}

export const Todo: React.FC<TodoProps> = ({ todo, status }: TodoProps) => {

    const statusColor = status === 'active' ? '#4caf50' : '#f44336';
    // evt: React.MouseEvent proporciona un tipado seguro y acceso a propiedades
    // específicas del evento del ratón en aplicaciones React con TypeScript.
    const handleClick = (evt:React.MouseEvent) => {
        console.log('click', evt);
    };

    return (
        <div className="todo-container">
            <div className="todo-content">
                <span className="todo-icon" role="img" aria-label="status">
                    {status === 'active' ? '✅' : '🕒'}
                </span>
                <div className="todo-text">
                    <i>{todo}</i>
                    <h4 style={{ backgroundColor: statusColor, color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                        {status === 'active' ? 'Active' : 'Inactive'}
                    </h4>
                </div>
            </div>
            <button onClick={handleClick}>text</button>
        </div>
    );
};

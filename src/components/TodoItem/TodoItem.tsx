import  type{ FC } from 'react';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    onToggle: (id: number) => void;
}
const TodoItem: FC<TodoItemProps> = ({ todo, onToggle }) => {
    return (
        <li className="todo-item">
            <label className='label-input-checkbox'>
                <input className='input-checkbox'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(): void => onToggle(todo.id)}
                />
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>
        </li>
    );
};
export default TodoItem;


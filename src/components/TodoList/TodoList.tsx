import type{ FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import type{Todo} from '../../models/types';

interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
}
const TodoList: FC<Props> = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map(todo => (
               <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
};
export default TodoList;
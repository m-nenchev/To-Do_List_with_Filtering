import { useState, type FC } from "react";

interface Props {
    onAdd: (text: string) => void;
}
//Displays an input field and a button 
//Calls onAdd() from App.tsx with the text from the field
const TodoInput: FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState<string>('');
    const handleAdd = (): void => {
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };
    return (
        <div className="todo-input-container">
            <input placeholder="Text here..." value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};
export default TodoInput;
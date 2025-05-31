import './App.css';
import React, { useState } from 'react';
import type{ Todo, Filter } from './models/types';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterButtons/FilterButtons';

//This is where all the data management and logic happens.
const App: React.FC = () => {
  //Manage results: tasks + selected filter
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  //Add a task
  const addTodo = (text: string):void => {
    const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };
  //Change status (completed/incomplete)
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };
  //Filter the list according to the selected filter
  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <FilterButtons currentFilter={filter} onChange={setFilter} />
      <TodoList todos={getFilteredTodos()} onToggle={toggleTodo} />
    </div>
  );
};
export default App;
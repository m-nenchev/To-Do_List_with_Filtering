# Simple React To-Do List with Filtering

This is a simple and clean To-Do List application built with **React** and **TypeScript**, following best practices for component structure, state management, and type safety. The app allows users to add, complete, and filter to-do items.

## ✨ Features

* Add new to-do items
* Mark items as completed
* Filter tasks by buttons:

* All - A list to show all tasks
* Active - A list of only active tasks
* Completed - A list of only completed tasks.

* Fully written in **TypeScript**
* Modular and reusable component structure

## 🧱 Project Structure

```
src/
├── components/
│   ├── FilterButtons.tsx     # Filter buttons (All / Active / Completed)
│   ├── TodoInput.tsx         # Input field to add new todos
│   ├── TodoItem.tsx          # Represents a single todo item
│   └── TodoList.tsx          # Lists all todo items
├── models                    
│   └── types.ts              # TypeScript interfaces and types
├── App.tsx                   # Main component, manages state
└── main.tsx                  # Entry point
```

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or newer recommended)
* npm or yarn

### Installation

cd To-Do_List_with_Filtering
npm install

### Run the App

npm run dev

Open your browser at [http://localhost:5173](http://localhost:5173) to view the app.

## 🧠 Technologies Used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)

## 📋 Type Definitions


// types.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';


## ✅ Requirements Checklist

* ✅ All components are written using TypeScript
* ✅ All props and state are properly typed
* ✅ Conditional rendering is used for completed items (strikethrough)
* ✅ Filter functionality is implemented and type-safe
* ✅ State is managed in `App` component using `useState`
* ✅ Clean and modular structure
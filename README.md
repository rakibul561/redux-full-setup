# Redux Full Setup 🛠️

A complete Redux Toolkit setup example using React, TypeScript, and modern best practices.

## 🚀 Features

- Redux Toolkit setup with `createSlice` and `configureStore`
- Type-safe Redux using TypeScript
- Organized folder structure
- Task management example (Add, Delete, Toggle Complete, Filter)
- Filter tasks by priority (low, medium, high)

## 🧱 Tech Stack

- React
- TypeScript
- Redux Toolkit
- Vite
- Tailwind CSS (if included)

## 📁 Project Structure

redux-full-setup/
├── src/
│ ├── components/ # Reusable UI components
│ ├── redux/ # Redux logic (store, slices)
│ │ ├── store.ts # Redux store configuration
│ │ └── features/
│ │ └── task/ # Task slice and related logic
│ ├── types/ # TypeScript type definitions
│ └── App.tsx # Main app component

bash
Copy
Edit

## ⚙️ Redux Store Setup

```ts
// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/task/taskSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
📌 Usage Example
Add new task

Toggle completion

Delete task

Filter tasks by priority

📥 Installation & Running
bash
Copy
Edit
git clone https://github.com/rakibul561/redux-full-setup.git
cd redux-full-setup
npm install
npm run dev
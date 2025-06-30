# Redux Full Setup 🛠️

A complete Redux Toolkit setup example using React, TypeScript, and modern best practices.

## 🚀 Features

- 🔧 Redux Toolkit setup with `createSlice` and `configureStore`
- ✅ Type-safe Redux using TypeScript
- 📂 Organized folder structure
- 📝 Task Management Example (Add, Delete, Toggle Complete, Filter)
- 📊 Priority-based filtering (low, medium, high)

## 🧱 Tech Stack

- React
- TypeScript
- Redux Toolkit
- Vite
- Tailwind CSS (optional if you added it)

---

## 📁 Project Structure

redux-full-setup/
├── src/
│ ├── components/ # Reusable components
│ ├── redux/ # Redux logic (store, slices)
│ │ ├── store.ts # Redux store configuration
│ │ └── features/
│ │ └── task/ # Task slice and related logic
│ ├── types/ # TypeScript type definitions
│ └── App.tsx # Main app component 

📦 Redux Setup Overview
Store
ts
Copy
Edit
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


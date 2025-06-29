import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "@/types";
  
  
   interface InitialState {
        tasks: ITask[]
   }

  
   const initialState: InitialState = {
    tasks: [
        {
        id: 'asafggdfh',
        title: 'initial frontend',
        description: 'Create home page , and Routnig',
        dueDate: "2025-11",
        isCompleted: false,
        priority: 'High'
    },
        {
        id: 'asdbfhgjfhg',
        title: 'init github repo',
        description: 'Create github repo , and code push',
        dueDate: "2026-21",
        isCompleted: false,
        priority: 'Medium'
    }
    ]
   }

   const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
   }) 

   export default taskSlice.reducer;
   
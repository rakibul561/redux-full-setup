import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "@/types";

 
  
  
   interface InitialState {
        tasks: ITask[],
        filter: "all" | "low"| "medium" | "high"
   }

  
   const initialState: InitialState = {
    tasks: [{
        id: "mWkxKbDlpTKc_lIs79lJi",
        isCompleted:false,
        title: "hello",
        description: "hello bangladesh",
        priority:"medium",
        dueDate: "Wed Jun 18 2025 00:00:00 GMT-0700"
    }],
    filter: "all",
   
   };
    
   type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">
    
   const createTask = (taskData:DraftTask) : ITask =>{
         return { id:nanoid(), isCompleted:false,...taskData}
   }


   const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
     addTask: (state, action: PayloadAction<DraftTask>) =>{
       
        const taskData = createTask(action.payload)

         state.tasks.push(taskData);
     },
     toggleComplateState: (state, action:PayloadAction<string>) =>{
        console.log(action);
        state.tasks.forEach((task) =>
            task.id === action.payload ?(task.isCompleted = !task.isCompleted) : task
        )
        
     } ,
     deleteTask: (state, action:PayloadAction<string>) =>{
        state.tasks =    state.tasks.filter((task) => task.id !== action.payload);
     },
     updatedFilter : (state, action:PayloadAction<"all" | "low" | "medium" | "high">) =>{
        state.filter= action.payload
     }

    }
   })  


   export const {addTask, toggleComplateState, deleteTask} = taskSlice.actions;

   export default taskSlice.reducer;

   
/* eslint-disable react-refresh/only-export-components */

import TaskCard from "@/components/module/task/TaskCard";
import { AddTaskModel } from "@/components/module/task/TaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updatedFilter } from "@/redux/features/counter/task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/middleware/hook"; // ✅ বড় S
import type { RootState } from "@/redux/store";


export default function Taks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

   const disPatch = useAppDispatch();

  return (
  <div className="max-w-7xl px-5 mt-20 mx-auto">
     <div className="flex justify-end items-center gap-5">
      <h1 className="mr-auto"> Tasks</h1>
       <Tabs defaultValue="all">
         <TabsList>
          <TabsTrigger onClick={() => disPatch(updatedFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={() => disPatch(updatedFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={() => disPatch(updatedFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={() => disPatch(updatedFilter("high"))} value="high">High</TabsTrigger>
         
        </TabsList>
       </Tabs>


      <AddTaskModel/>
     </div> 
     <div className="space-y-5 mt-5">
       {
        tasks.map((task) => ( <TaskCard task={task} key={task.id} />

        )
        )}
     </div>
  </div>
  );
}
 

export const selectTasks = (state:RootState) =>{
    return state.todo.tasks;
}
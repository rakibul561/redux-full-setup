import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/middleware/hook";
import { deleteTask, toggleComplateState } from "@/redux/features/counter/task/TaskSlice";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) { 
    
  const disPatch = useAppDispatch();


  return (
    <div className="border px-5 py-4 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full",{
            "bg-green-500":task.priority === "low",
            "bg-yellow-500":task.priority === "medium",
            "bg-red-500":task.priority === "high",
          }
          )}></div>
          <h1 className={cn({"line-through": task.isCompleted})}> {task.title} </h1>
         
        </div>

        <div className="flex gap-3 items-center">
          <Button onClick={() =>disPatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox checked={task.isCompleted} onClick={() =>disPatch(toggleComplateState(task.id))} />
        </div>
      </div>
      <p> {task.description} </p>
    </div>
  );
}

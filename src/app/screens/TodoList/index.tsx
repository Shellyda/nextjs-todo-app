"use server";
import { deleteTodo, getTodos, updateTodo } from "@/app/services";
import { ITask } from "@/app/utils/interfaces";
import {
  ArchiveBoxIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { revalidateTag } from "next/cache";
import { Card } from "../../components/Card";
import { Column } from "../../components/Column";

export const TodoList = async () => {
  const data = await getTodos();

  data.sort(
    (
      a: { priority: number; difficulty: number },
      b: { priority: number; difficulty: number }
    ) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      } else {
        return b.difficulty - a.difficulty;
      }
    }
  );

  const pendingTasks = data.filter((task: ITask) => task.status === "pending");
  const archivedTasks = data.filter(
    (task: ITask) => task.status === "archived"
  );
  const completedTasks = data.filter(
    (task: ITask) => task.status === "completed"
  );

  const handleOnClickIcon = async (task: ITask, newStatus: string) => {
    "use server";

    if (newStatus == "deleted") {
      await deleteTodo(task);
    } else {
      await updateTodo(newStatus, task);
    }

    revalidateTag("get-todos");
  };

  return (
    <div
      className="container mx-auto absolute"
      style={{
        top: "0",
      }}
    >
      <main className="mt-10">
        <div className="flex">
          <ClipboardDocumentCheckIcon className="mr-2 h-6 w-6 cursor-pointer text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />

          <h1
            className="text-2xl font-bold mb-5 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
          >
            Todo list Board
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Column
            title="Pending"
            tasksNumber={pendingTasks.length}
            icon={
              <ClockIcon className="mr-2 h-6 w-6 opacity-50 cursor-pointer text-gray-700" />
            }
          >
            {pendingTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>

          <Column
            title="Completed"
            tasksNumber={completedTasks.length}
            icon={
              <DocumentCheckIcon className="mr-2 h-6 w-6 opacity-50 cursor-pointer text-gray-700" />
            }
          >
            {completedTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>

          <Column
            title="Archived"
            tasksNumber={archivedTasks.length}
            icon={
              <ArchiveBoxIcon className="mr-2 h-6 w-6 opacity-50 cursor-pointer text-gray-700" />
            }
          >
            {archivedTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>
        </div>
      </main>
    </div>
  );
};

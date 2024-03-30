// "use client";
"use server";
import { getTodos, updateTodo } from "@/app/services";
import { revalidateTag } from "next/cache";
import { Card } from "../Card";
import { Column } from "../Column";

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

  const pendingTasks = data.filter((task: any) => task.status === "pending");
  const canceledTasks = data.filter((task: any) => task.status === "canceled");
  const completedTasks = data.filter(
    (task: any) => task.status === "completed"
  );

  const handleOnClickIcon = async (task: any, newStatus: string) => {
    "use server";
    console.log(task);
    console.log(newStatus);

    await updateTodo(newStatus, task);

    revalidateTag("get-todos");
  };

  return (
    <div className="container mx-auto">
      <main className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Todo List</h1>
        <div className="grid grid-cols-3 gap-4">
          <Column title="Pending">
            {pendingTasks.map((task: any) => (
              <Card
                task={task}
                key={task.id}
                onClickCheck={handleOnClickIcon}
                onClickCancel={handleOnClickIcon}
              />
            ))}
          </Column>

          <Column title="Completed">
            {completedTasks.map((task: any) => (
              <Card task={task} key={task.id} />
            ))}
          </Column>

          <Column title="Canceled">
            {canceledTasks.map((task: any) => (
              <Card task={task} key={task.id} />
            ))}
          </Column>
        </div>
      </main>
    </div>
  );
};

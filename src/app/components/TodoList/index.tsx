"use server";
import { getTodos, updateTodo } from "@/app/services";
import { ITask } from "@/app/utils/interfaces";
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

  const pendingTasks = data.filter((task: ITask) => task.status === "pending");
  const canceledTasks = data.filter(
    (task: ITask) => task.status === "canceled"
  );
  const completedTasks = data.filter(
    (task: ITask) => task.status === "completed"
  );

  const handleOnClickIcon = async (task: ITask, newStatus: string) => {
    "use server";

    await updateTodo(newStatus, task);

    revalidateTag("get-todos");
  };

  return (
    <div className="container mx-auto">
      <main className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Todo List</h1>
        <div className="grid grid-cols-3 gap-4">
          <Column title="Pending" tasksNumber={pendingTasks.length}>
            {pendingTasks.map((task: ITask) => (
              <Card
                task={task}
                key={task.id}
                onClickCheck={handleOnClickIcon}
                onClickCancel={handleOnClickIcon}
              />
            ))}
          </Column>

          <Column title="Completed" tasksNumber={completedTasks.length}>
            {completedTasks.map((task: ITask) => (
              <Card task={task} key={task.id} />
            ))}
          </Column>

          <Column title="Canceled" tasksNumber={canceledTasks.length}>
            {canceledTasks.map((task: ITask) => (
              <Card task={task} key={task.id} />
            ))}
          </Column>
        </div>
      </main>
    </div>
  );
};

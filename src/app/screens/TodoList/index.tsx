"use server";
import { deleteTodo, getTodos, updateTodo } from "@/app/services";
import { ITask } from "@/app/utils/interfaces";
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
    <div className="container mx-auto">
      <main className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Todo list Board</h1>
        <div className="grid grid-cols-3 gap-4">
          <Column title="Pending" tasksNumber={pendingTasks.length}>
            {pendingTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>

          <Column title="Completed" tasksNumber={completedTasks.length}>
            {completedTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>

          <Column title="Archived" tasksNumber={archivedTasks.length}>
            {archivedTasks.map((task: ITask) => (
              <Card task={task} key={task.id} onClickIcon={handleOnClickIcon} />
            ))}
          </Column>
        </div>
      </main>
    </div>
  );
};

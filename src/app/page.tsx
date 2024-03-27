import { DifficultySlider } from "./components";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList />
      <AddTodo />
      <DifficultySlider />
    </main>
  );
}

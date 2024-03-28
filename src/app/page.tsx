import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList />

      <AddTodo />
    </main>
  );
};

export default Home;

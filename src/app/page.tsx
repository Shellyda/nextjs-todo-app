import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const Home = () => {
  return (
    <main className="flex items-center justify-around">
      <AddTodo />

      <TodoList />
    </main>
  );
};

export default Home;

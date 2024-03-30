import { AddTodo } from "./components";
import { TodoList } from "./screens";

const Home = () => {
  return (
    <main className="flex items-center justify-around">
      <AddTodo />

      <TodoList />
    </main>
  );
};

export default Home;

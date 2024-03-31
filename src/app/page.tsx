import { AddTodo } from "./components";
import { Toast } from "./components/Toast";
import { TodoList } from "./screens";

const Home = () => {
  return (
    <main className="h-full w-full flex items-center justify-around bg-gradient-to-r from-emerald-400 to-cyan-400">
      <AddTodo />
      <TodoList />

      <Toast testID="toast-alert" />
    </main>
  );
};

export default Home;

import { AddTodo } from "./components";
import { Toast } from "./components/Toast";
import { TodoList } from "./screens";

const Home = () => {
  return (
    <main className="h-full w-full flex items-center justify-around bg-gradient-to-r from-emerald-400 to-cyan-400">
      <AddTodo />
      <TodoList />

      <Toast testID="toast-canceled" text="This todo was deleted!" />
      <Toast
        testID="toast-completed"
        text="This todo was completed successfully!"
      />
    </main>
  );
};

export default Home;

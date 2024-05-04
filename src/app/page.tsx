import { Suspense } from "react";
import { AddTodo, Toast } from "./components";
import { TodoList } from "./screens";

const Home = () => {
  return (
    <main className="h-full w-full flex items-center justify-around bg-gradient-to-r from-emerald-400 to-cyan-400">
      <AddTodo />
      <TodoList />
      <Suspense>
        <Toast testID="toast-alert" />
      </Suspense>
    </main>
  );
};

export default Home;

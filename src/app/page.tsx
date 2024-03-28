import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const Home = () => {
  return (
    <main>
      <TodoList />

      <AddTodo />
    </main>
  );
};

export default Home;

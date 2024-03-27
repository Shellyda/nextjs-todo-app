// 'use client' // Allows hydration by client side
import { createTodo } from "@/app/services";
import { revalidateTag } from "next/cache";

export const AddTodo = () => {
  const handleAddNewTodo = async (form: FormData) => {
    "use server"; // Execute this function in Next backend server

    const title = form.get("title");
    const color = form.get("color");
    const difficulty = form.get("difficulty");
    const priority = form.get("priority");

    if (!title) {
      return;
    }
    const todo = {
      title,
      color,
      difficulty,
      priority,
    };

    createTodo(todo);

    revalidateTag("get-todos"); // Check get todos request in orther component
    // In normal React probably would use LIFT STATE UP or REACT QUERY => TANSTACK QUERY => HTTP STATE concepts
  };

  return (
    <form action={handleAddNewTodo}>
      <input
        type="text"
        name="title"
        placeholder="Add new todo"
        alt="Text input"
      />
      <input type="color" name="color" alt="Color picker" />
      <input type="number" name="priority" alt="Number input" />
      <button type="submit">New todo</button>
    </form>
  );
};

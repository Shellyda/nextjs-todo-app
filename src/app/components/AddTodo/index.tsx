import { createTodo } from "@/app/services";
import { revalidateTag } from "next/cache";
import { FormInputs } from "../FormInputs";

export const AddTodo = () => {
  const handleAddNewTodo = async (form: FormData) => {
    "use server"; // Execute this function in Next backend server

    const title = form.get("title");
    const color = form.get("color");
    const difficulty = Number(form.get("difficulty"));
    const priority = Number(form.get("priority"));

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
      <FormInputs />
    </form>
  );
};

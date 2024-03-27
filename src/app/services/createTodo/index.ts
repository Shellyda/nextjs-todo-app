import { API_URL } from "@/constants/env.constants";
import { ITodoData } from "./interfaces";

export const createTodo = async (newTodo: ITodoData) => {
  await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({ ...newTodo }),
  });
};

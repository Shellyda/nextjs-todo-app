import { API_URL } from "@/app/utils/constants/env.constants";
import { ITodoData } from "./interfaces";

export const createTodo = async (newTodo: ITodoData) => {
  try {
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({ ...newTodo }),
    });
  } catch (error) {
    throw error;
  }
};

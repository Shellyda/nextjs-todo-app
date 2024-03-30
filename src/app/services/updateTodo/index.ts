import { API_URL } from "@/app/constants/env.constants";

export const updateTodo = async (newStatus: string, task: any) => {
  try {
    await fetch(`${API_URL}/todos/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...task, status: newStatus }),
    });
  } catch (error) {
    console.error(error);
  }
};

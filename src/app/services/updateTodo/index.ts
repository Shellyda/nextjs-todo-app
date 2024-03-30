import { API_URL } from "@/app/utils/constants/env.constants";
import { ITask } from "@/app/utils/interfaces";

export const updateTodo = async (newStatus: string, task: ITask) => {
  try {
    await fetch(`${API_URL}/todos/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...task, status: newStatus }),
    });
  } catch (error) {
    throw error;
  }
};

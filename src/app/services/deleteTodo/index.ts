import { API_URL } from "@/app/utils/constants/env.constants";
import { ITask } from "@/app/utils/interfaces";

export const deleteTodo = async (task: ITask) => {
  try {
    await fetch(`${API_URL}/todos/${task.id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};

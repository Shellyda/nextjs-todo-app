import { API_URL } from "@/app/utils/constants/env.constants";
import { ITask } from "@/app/utils/interfaces";

export const getTodos = async (): Promise<ITask[]> => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      next: {
        tags: ["get-todos"],
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

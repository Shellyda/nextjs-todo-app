import { API_URL } from "@/app/constants/env.constants";

export const getTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      next: {
        tags: ["get-todos"],
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

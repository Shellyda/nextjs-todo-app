import { API_URL } from "@/constants/env.constants";

export const getTodos = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    next: {
      tags: ["get-todos"],
    },
  });

  const data = await response.json();

  return data;
};

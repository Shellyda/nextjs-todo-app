import { API_URL } from "@/app/utils/constants/env.constants";
import { updateTodo } from "./index";

import mockTask from "@@/__tests__/__mocks__/mockTask.json";

describe("services > updateTodo function", () => {
  const mockFetch = jest.fn();

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  it("should call fetch with the correct arguments", async () => {
    const newStatus = "completed";

    await updateTodo(newStatus, mockTask);

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/todos/${mockTask.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...mockTask, status: newStatus }),
    });
  });

  it("should throw an error if fetch fails", async () => {
    const mockError = new Error("Mock error message");
    mockFetch.mockRejectedValueOnce(mockError);

    const newStatus = "completed";

    await expect(updateTodo(newStatus, mockTask)).rejects.toThrow(mockError);
  });
});

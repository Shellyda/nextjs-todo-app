import { API_URL } from "@/app/utils/constants/env.constants";
import mockTask from "@@/__tests__/__mocks__/mockTask.json";
import { deleteTodo } from ".";

describe("services > deleteTodo function", () => {
  const mockFetch = jest.fn();

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  it("should call fetch with the correct arguments", async () => {
    await deleteTodo(mockTask);

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/todos/${mockTask.id}`, {
      method: "DELETE",
    });
  });

  it("should throw an error if fetch fails", async () => {
    const mockError = new Error("Mock error message");
    mockFetch.mockRejectedValueOnce(mockError);

    await expect(deleteTodo(mockTask)).rejects.toThrow(mockError);
  });
});

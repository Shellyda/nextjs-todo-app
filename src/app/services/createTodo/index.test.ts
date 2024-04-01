import { API_URL } from "@/app/utils/constants/env.constants";
import { createTodo } from "./index";

import mockTask from "@@/__tests__/__mocks__/mockTask.json";

describe("services > createTodo function", () => {
  const mockFetch = jest.fn();

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  it("should call fetch with the correct arguments", async () => {
    await createTodo(mockTask);

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({ ...mockTask }),
    });
  });

  it("should throw an error if fetch fails", async () => {
    const mockError = new Error("Mock error message");
    mockFetch.mockRejectedValueOnce(mockError);

    await expect(createTodo(mockTask)).rejects.toThrow(mockError);
  });
});

import { API_URL } from "@/app/utils/constants/env.constants";
import mockData from "@@/__tests__/__mocks__/mockData.json";
import { getTodos } from ".";

describe("getTodos function", () => {
  const mockFetch = jest.fn();

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  it("should call fetch with the correct arguments", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => mockData,
    });

    await getTodos();

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/todos`, {
      next: {
        tags: ["get-todos"],
      },
    });
  });

  it("should return the data from the response", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => mockData,
    });

    const result = await getTodos();

    expect(result).toEqual(mockData);
  });

  it("should throw an error if fetch fails", async () => {
    const mockError = new Error("Mock error message");
    mockFetch.mockRejectedValueOnce(mockError);

    await expect(getTodos()).rejects.toThrow(mockError);
  });
});

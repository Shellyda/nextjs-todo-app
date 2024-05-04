import mockData from "@@/__tests__/__mocks__/mockData.json";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { TodoList } from "./index";

declare const updateTodo: jest.Mock;
declare const deleteTodo: jest.Mock;
(global as any).fetch = jest.fn();
jest.mock("../../services", () => ({
  getTodos: jest.fn().mockResolvedValue(mockData), // Pass the mockData array as an argument
  updateTodo: jest.fn().mockResolvedValue({}),
  deleteTodo: jest.fn((todo) => Promise.resolve()),
}));

describe("TodoList component", () => {
  it("renders without crashing", async () => {
    render(await TodoList());
    // You can add more specific tests here if needed
  });

  it("renders tasks correctly", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => mockData,
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "basic",
      url: "",
      clone: () => new Response(),
      // Remove the 'error' property from the object literal
      // error: () => {},
      // Remove the 'redirect' property from the object literal
      // redirect: () => {},
      body: null,
      bodyUsed: false,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      blob: () => Promise.resolve(new Blob()),
      formData: () => Promise.resolve(new FormData()),
      text: () => Promise.resolve(""),
    });

    const { getByText } = render(await TodoList());
    await waitFor(() => {
      expect(getByText("Task 1")).toBeInTheDocument();
      expect(getByText("Task 2")).toBeInTheDocument();
      expect(getByText("Task 3")).toBeInTheDocument();
    });
  });

  it("updates task status correctly", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce(
      Promise.resolve({
        json: async () => mockData,
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
        clone: () => new Response(),
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        text: () => Promise.resolve(""),
      })
    );

    const { getByTestId } = render(await TodoList());
    await waitFor(() => {
      fireEvent.click(getByTestId("task-1")); // Assuming you have a test id for tasks
    });

    expect(updateTodo).toHaveBeenCalledWith("completed", mockData[0]);
  });

  it("deletes task correctly", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce(
      Promise.resolve({
        json: async () => mockData,
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
        clone: () => new Response(),
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        text: () => Promise.resolve(""),
      })
    );

    const { getByTestId } = render(await TodoList());
    fireEvent.touchMove(getByTestId("card-99aa")); // Assuming you have a test id for tasks
    fireEvent.click(getByTestId("button-complete-task-99aa")); // Assuming you have a test id for delete button

    expect(deleteTodo).toHaveBeenCalledWith(mockData[0]);
  });
});

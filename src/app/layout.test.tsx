import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

describe("app > RootLayout", () => {
  it("renders children correctly", () => {
    const testId = "child-component";
    render(
      <RootLayout>
        <div data-testid={testId}>Test Child</div>
      </RootLayout>
    );

    const childComponent = screen.getByTestId(testId);
    expect(childComponent).toBeInTheDocument();
  });

  it("metadata has the correct values", () => {
    expect(metadata).toEqual({
      title: "Todo List Board",
      description: "Todo Management Web App",
    });
  });
});

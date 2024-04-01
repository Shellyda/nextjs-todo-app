import { render } from "@testing-library/react";
import RootLayout from "./layout";

describe("RootLayout component", () => {
  const mockChildren = <div>Mock children content</div>;

  it("should render children and apply correct CSS class", () => {
    const { getByText, container } = render(
      <RootLayout>{mockChildren}</RootLayout>
    );

    expect(getByText("Mock children content")).toBeInTheDocument();

    expect(container.querySelector("body")).toHaveClass("className");
  });

  it("should render with the correct language attribute", () => {
    const { container } = render(<RootLayout>{mockChildren}</RootLayout>);

    expect(container.querySelector("html")).toHaveAttribute("lang", "en");
  });

  it("should render with the correct metadata", () => {
    const mockChildren = <div>Mock children content</div>;

    const { getByText } = render(<RootLayout>{mockChildren}</RootLayout>);

    expect(getByText("Todo List Board")).toBeInTheDocument();

    expect(getByText("Todo Management Web App")).toBeInTheDocument();
  });
});

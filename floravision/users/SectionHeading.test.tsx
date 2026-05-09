import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionHeading from "@/src/components/sectionHeading";

describe("SectionHeading", () => {
  it("renders children text", () => {
    render(<SectionHeading>Top Selling Plants</SectionHeading>);
    expect(screen.getByText("Top Selling Plants")).toBeInTheDocument();
  });

  it("renders an h2 element", () => {
    render(<SectionHeading>Test Heading</SectionHeading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});

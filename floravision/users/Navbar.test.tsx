import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/src/components/Navbar";

describe("Navbar", () => {
  it("renders the FloraVision brand name", () => {
    render(<Navbar />);
    expect(screen.getByText(/FloraVision/)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /worth types/i })).toBeInTheDocument();
  });

  it("renders search button with accessible label", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("renders cart button with accessible label", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /open cart/i })).toBeInTheDocument();
  });
});

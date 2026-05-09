import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlantCard from "@/src/components/Plantcard";

const mockPlant = {
  name: "Monstera",
  description: "A tropical houseplant with distinctive perforated leaves.",
  price: "Rs. 400/-",
  image: "/plants/monstera.png",
};

describe("PlantCard", () => {
  it("renders plant name", () => {
    render(<PlantCard {...mockPlant} />);
    expect(screen.getByText("Monstera")).toBeInTheDocument();
  });

  it("renders plant description", () => {
    render(<PlantCard {...mockPlant} />);
    expect(screen.getByText(mockPlant.description)).toBeInTheDocument();
  });

  it("renders plant price", () => {
    render(<PlantCard {...mockPlant} />);
    expect(screen.getByText("Rs. 400/-")).toBeInTheDocument();
  });

  it("renders an image with correct alt text", () => {
    render(<PlantCard {...mockPlant} />);
    expect(screen.getByAltText("Monstera")).toBeInTheDocument();
  });

  it("renders an add-to-cart button with aria-label", () => {
    render(<PlantCard {...mockPlant} />);
    expect(
      screen.getByRole("button", { name: /add monstera to cart/i })
    ).toBeInTheDocument();
  });
});

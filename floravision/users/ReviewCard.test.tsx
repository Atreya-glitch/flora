import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewCard from "@/src/components/ReviewCard";

const mockReview = {
  name: "Shelly Russel",
  rating: 5,
  quote: "Just got my hands on some absolutely awesome plants!",
  avatar: "/plants/avatar_3.png",
};

describe("ReviewCard", () => {
  it("renders reviewer name", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByText("Shelly Russel")).toBeInTheDocument();
  });

  it("renders the review quote", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByText(mockReview.quote)).toBeInTheDocument();
  });

  it("renders avatar image with reviewer name as alt text", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByAltText("Shelly Russel")).toBeInTheDocument();
  });

  it("renders star rating with accessible label", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByLabelText("Rating: 5 out of 5 stars")).toBeInTheDocument();
  });

  it("renders correct number of stars", () => {
    render(<ReviewCard {...mockReview} />);
    const starContainer = screen.getByLabelText("Rating: 5 out of 5 stars");
    const stars = starContainer.querySelectorAll("svg");
    expect(stars).toHaveLength(5);
  });
});

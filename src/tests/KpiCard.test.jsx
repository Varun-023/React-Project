import React from "react";
import { render, screen } from "@testing-library/react";
import KpiCard from "../components/KpiCard";
import "@testing-library/jest-dom";

describe("KpiCard Component", () => {
    it("renders the title and value correctly", () => {
        render(<KpiCard title="Total Users" value={150} />);
        
        expect(screen.getByText("Total Users")).toBeInTheDocument();
        expect(screen.getByText("150")).toBeInTheDocument();
    });
});

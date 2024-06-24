import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./BoxList"

// smoke test
it("renders without crashing", function() {
    render(<BoxList />);
  });
  
  // snapshot test
  it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("populates the squares", function() {
    const { container } = render(
      <BoxList />
    );
    // expect the initial state to load the first box
    expect(
        container.querySelector('div[id="5"]')
      ).toBeInTheDocument();
    });

    it("deletes a box", function() {
        const { container } = render(<BoxList />);
        // find the initial box
        const box = container.querySelector('div[style*="background-color: Blue"]');
        expect(box).toBeInTheDocument();
      
        // find and click the delete button
        const deleteButton = screen.getByText("Remove");
        fireEvent.click(deleteButton);
      
        // verify the box has been removed from the DOM
        expect(container.querySelector('div[style*="background-color: Blue"]')).not.toBeInTheDocument();
      });
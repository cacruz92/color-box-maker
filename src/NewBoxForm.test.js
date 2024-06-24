import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm"

// smoke test
it("renders without crashing", function() {
    render(<NewBoxForm />);
  });
  
  // snapshot test
  it("matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("populates the correct form fields", function() {
    const { container } = render(
      <NewBoxForm />
    );
    // expect the form fields to be on the page
    expect(
      container.querySelector('input[id="color"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('input[id="height"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('input[id="width"]')
    ).toBeInTheDocument();
});
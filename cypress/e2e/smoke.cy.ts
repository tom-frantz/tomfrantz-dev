describe("smoke tests", () => {
  it("should render all the pages", () => {
    cy.visit("/");
    cy.findByText(/TomFrantz.dev/).should("exist");
  });
});

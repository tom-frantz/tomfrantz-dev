describe("smoke tests", () => {
  it("should render all the pages", () => {
    cy.visit("/");
    cy.findByText(/Welcome to the home page/i).should("exist");
  })
});

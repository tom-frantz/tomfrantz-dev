describe("smoke tests", () => {
  it("should render all the pages", () => {
    cy.visit("/");
    cy.contains(/Tom Frantz .dev/).should("exist");
  });
});

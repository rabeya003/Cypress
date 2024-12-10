//<reference types="Cypress" />;
it("Checking Radio Buttons", () => {
  cy.visit("https://demo.automationtesting.in/Register.html");
  cy.get("input[value='Male']").should("be.visible");
  cy.get("input[value='Male']").check().should("be.checked");
});

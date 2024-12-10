//<reference types="Cypress" />;
it("Checking Radio Buttons", () => {
  cy.visit("https://demo.automationtesting.in/Register.html");
  cy.get("input[value='Male']").should("be.visible");
  cy.get("input[value='Male']").check().should("be.checked");
});
it("Checking Checkbox is properly working or not", () => {
  cy.visit("https://demo.automationtesting.in/Register.html");
  cy.get("#checkbox1").should("be.visible");
  cy.get("#checkbox1").check().should("be.checked");
  //Unselecting checkbox
  cy.get("#checkbox1").uncheck().should("be.checked");
  //selecting Another checkbox
  cy.get("#checkbox3").check().should("be.checked");
});

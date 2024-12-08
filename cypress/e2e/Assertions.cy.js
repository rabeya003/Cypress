// const cypress = require("cypress");
// const { describe } = require("mocha");
describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  //Explicit assertions
  it("Explicit assertions", () => {});
});

// const cypress = require("cypress");
// const { describe } = require("mocha");
describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //URL
    cy.url()
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("not.contain", "xcvcvhdgcbvngehrm");

    // title
    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM")
      .and("not.contain", "xhjjanka");
  });

  //Explicit assertions
  it("Explicit assertions", () => {});
});

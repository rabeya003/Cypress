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

    //Elements
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");
    cy.xpath("//a").should("have.length", 5); //number of links are here
    // Login input
    cy.get("input[placeholder='Username']").type("Rabeya Boshri"); //provide a value into input box
    cy.get("input[placeholder='Username']").should(
      "have.value",
      "Rabeya Boshri"
    );
  });

  //Explicit assertions
  it("Explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "XYZ";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();
      // BDD
      expect(expName).to.not.equal(actName);
      expect(actName).to.equal(expName);
      // TDD
      assert.notEqual(expName, expName);
      assert.equal(expName, expName);
    });
  });
});

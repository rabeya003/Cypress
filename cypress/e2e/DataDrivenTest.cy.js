describe("MyTestSuite", () => {
  it("DataDrivenTest", () => {
    cy.fixture("orangehrm2.json").then((data) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      // Arrow function
      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        // validation
        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
          cy.get(
            ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
          ).should("have.text", userdata.expected);

          // LogOut
          cy.get(".oxd-userdropdown-tab").click();
          cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            userdata.expected
          );
        }
      });
    });
  });
});

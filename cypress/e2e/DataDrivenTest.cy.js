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
        }
      });
    });
  });
});

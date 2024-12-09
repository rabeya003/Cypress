describe("MyTestSuite", () => {
  it("DataDrivenTest", () => {
    cy.fixture("orangehrm").then(() => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      data.foreach((userdata) => {});
    });
  });
});

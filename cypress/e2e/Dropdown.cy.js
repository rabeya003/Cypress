describe("handle dropdown", () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Italy")
      .should("have.value", "Italy");
  });
});

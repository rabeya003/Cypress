describe("Alerts", () => {
  //1)Js alert:It will have some text and an 'OK button
  it("Js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });

    // Alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
});

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

  //2) Javascript Confirm Alert:It will have some text with 'OK and 'Cancel' buttons
  //For OK
  it("Js Confirm alert-OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    // Cypress automatically closed alert window by using 'ok' button default
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  //For Cancle
  it("Js Confirm alert-Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); //cancle
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //3) Javascript Prompt Alert:It will have some text with a text box for user input along with 'ok'
  it("Js alert Prompt", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });

    cy.get("button[onclick='jsPrompt()']").click();
    // Cypress will atomatically close prompted alert-it will use Ok button-By_default
    // cy.on("window:confirm", () => false); //cancle
    cy.get("#result").should("have.text", "You entered: welcome");
  });
  //4) Authenticated Alert
  it.only("Js Authentication", () => {
    //Apporach - 1;
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
  });
});

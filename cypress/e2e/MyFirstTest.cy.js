// /// <reference types="cypress" />

// describe("Cypress XPath Test Example", () => {
//   it("should select and interact with elements using XPath", () => {
//     // Visit the test page
//     cy.visit("http://127.0.0.1:5500/index.html"); // Replace with your URL

//     // 1. Select and verify the heading using XPath
//     cy.xpath("//h1").should("contain.text", "Welcome to the Sample Page");

//     // 2. Select and verify the paragraph element by its ID using XPath
//     cy.xpath('//*[@id="description"]').should(
//       "contain.text",
//       "This is a simple paragraph for testing."
//     );

//     // 3. Click the button using XPath to select it by its class
//     cy.xpath('//button[contains(@class, "btn")]').click();

//     // 4. Verify that the "Contact Us" link exists using XPath
//     cy.xpath('//a[@href="/contact"]').should("be.visible");

//     // 5. Click the "Contact Us" link
//     cy.xpath('//a[contains(@class, "contact-link")]').click();

//     // You can add more assertions or interactions as needed
//   });
// });

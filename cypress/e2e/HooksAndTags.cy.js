// Before
// After
// BeforeEach
// AfterEach
describe("MyTestSuite", () => {
  before("Search", () => {
    cy.log("**  Launch app   ***");
  });

  after(() => {
    cy.log("*** Close App ****");
  });

  beforeEach(() => {
    cy.log("**** Login  ****");
  });

  afterEach(() => {
    cy.log("****  logOut ****");
  });

  it("Search", () => {
    cy.log("**** advanced searching  ****");
  });
  it("Advanced Search", () => {
    cy.log("**** advanced searching  ****");
  });
  it("Listing Products", () => {
    cy.log("***  Listing products ****");
  });
});

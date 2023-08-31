// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Loads the site from the boot screen
Cypress.Commands.add("visitBoot", () => {
  localStorage.setItem("last_seen", 0)
  cy.visit("http://localhost:5173/")
})

// Loads the page from the terminal screen
Cypress.Commands.add("visitRecent", () => {
  localStorage.setItem("last_seen", Date.now())
  cy.visit("http://localhost:5173/")
})

// Query using data-test attribute
Cypress.Commands.add("datatest", (value) => {
  return cy.get(`[data-test='${value}']`)
})

// Check if some attribute contains `value` in its value
Cypress.Commands.add("attrContains", { prevSubject: true }, (parent, attr, value) => {
  return parent.get(`[${attr}*='${value}']`)
})

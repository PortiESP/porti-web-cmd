/// <reference types="Cypress" />

// -----------------------------------------------------------------------------------
describe.skip("Testing booting process", () => {
  beforeEach(() => cy.visitBoot())

  it("Site loads", () => {
    cy.datatest("splash").should("exist")
    cy.contains("English").should("exist")
    cy.contains("Spanish").should("exist")
  })

  it("Languages toggle works", () => {
    // Checking arrows
    cy.datatest("spanish").should("have.class", "false")
    cy.datatest("english").get('[class*="selected"]').should("exist")
    cy.datatest("splash").type("{downArrow}")
    cy.datatest("english").should("have.class", "false")
    cy.datatest("splash").type("{upArrow}")
    cy.datatest("spanish").should("have.class", "false")

    // Checking clicks
    cy.datatest("spanish").should("have.class", "false")
    cy.datatest("english").get('[class*="selected"]').should("exist")
    cy.datatest("spanish").click()
    cy.datatest("english").should("have.class", "false")
    cy.datatest("english").click()
    cy.datatest("spanish").should("have.class", "false")

    cy.datatest("english").click()
    cy.datatest("splash").should("not.exist")
  })

  it("Test boot animation", () => {
    cy.datatest("english").click()
    cy.datatest("bootloader").should("exist")
    cy.datatest("first-log").should("exist")
    cy.datatest("last-log").should("exist")
    cy.wait(2000).datatest("bootloader").should("not.exist")
    cy.datatest("terminal").should("exist")
  })

  it("Check language english", () => {
    cy.datatest("english").click()
    cy.wait(2000).datatest("terminal").should("exist")
    cy.datatest("terminal").contains("WHAT IS")
  })

  it("Check language spanish", () => {
    cy.datatest("spanish").click()
    cy.datatest("spanish").click()
    cy.wait(2000).datatest("terminal").should("exist")
    cy.datatest("terminal").contains("QUÉ ES")
  })
})

// -----------------------------------------------------------------------------------
describe.skip("Testing terminal", () => {
  beforeEach(() => cy.visitRecent())

  it("Testing terminal exist", () => {
    cy.datatest("terminal").should("exist")
  })

  it("Testing input", () => {
    cy.datatest("prompt-input").focus().type("hello")
    cy.datatest("prompt-output").should("have.text", "hello")
  })

  it("Testing suggestions", () => {
    cy.datatest("suggestion").should("not.exist")
    cy.datatest("prompt-input").focus().type("h")
    cy.datatest("suggestion").should("exist")
    cy.datatest("suggestion").should("contain", "[tab]")
    cy.datatest("suggestion").click()
    cy.datatest("prompt-output").should("have.text", "help")
  })

  it("Testing valid commands", () => {
    cy.datatest("prompt-input").focus().type("abc{enter}")
    cy.datatest("terminal").contains("Command not recognized")
  })

  it("Testing command historial", () => {
    cy.datatest("prompt-input").focus().type("abc{enter}")
    cy.datatest("prompt-input").focus().type("{upArrow}")
    cy.datatest("prompt-output").should("have.text", "abc")
  })

  it("Testing clean screen", () => {
    cy.datatest("prompt-input").focus().type("help{enter}")
    cy.datatest("terminal").contains("language")
    cy.datatest("prompt-input").focus().type("{ctrl+l}")
    cy.datatest("terminal").should("not.contain", "language")
  })
})

// -----------------------------------------------------------------------------------
describe.skip("Testing commands", () => {
  beforeEach(() => {
    localStorage.setItem("lang", "en")
    cy.visitRecent()
  })

  it("Help", () => {
    cy.datatest("prompt-input").focus().type("help{enter}")
    cy.datatest("terminal").contains("<CTRL+C>")
  })

  it("About", () => {
    cy.datatest("prompt-input").focus().type("about{enter}")
    cy.datatest("terminal").contains("As I have mentioned before")
    cy.datatest("terminal").contains("[i] You may want to")
  })

  it("Skills", () => {
    cy.datatest("prompt-input").focus().type("skills{enter}")
    cy.datatest("terminal").contains("Flipper Zero")
  })

  it("Social", () => {
    cy.datatest("prompt-input").focus().type("social{enter}")
    cy.datatest("terminal").contains("TryHackMe")
  })

  it("Projects", () => {
    cy.datatest("prompt-input").focus().type("projects{enter}")
    cy.datatest("terminal").contains("fetch requests")
  })

  it("Superheroes", () => {
    cy.datatest("prompt-input").focus().type("superheroes{enter}")
    cy.datatest("terminal").contains("Manypixels")
  })

  it("TicTacToe", () => {
    cy.datatest("prompt-input").focus().type("run TicTacToe{enter}")
    cy.datatest("terminal").contains("Game status: Playing...")
  })

  it("Language", () => {
    cy.datatest("splash").should("not.exist")
    cy.datatest("prompt-input").focus().type("language{enter}")
    cy.datatest("splash").should("contain", "Boot headless")
  })
})

describe("test", () => {
  beforeEach(() => cy.visitRecent())

  it("Shutdown", () => {
    cy.datatest("terminal").contains("$")
    cy.datatest("prompt-input").focus().type("shutdown{enter}")
    cy.datatest("terminal").should("not.contain", "$")
    cy.datatest("no-signal")
      .should("contain", "No signal")
      .then(() => {
        expect(localStorage.last_seen).to.equal("0")
      })
  })
})

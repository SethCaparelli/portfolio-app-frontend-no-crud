describe("Seth Caparelli's Portfolio", () => {
    it ("Loads", () => {
        cy.visit("http://localhost:3000")
    })
    it ("The Page is Populated", () => {
        cy.get(".work").should("have.length.gt", 1)
    })
    it ("Loads Other work", () => {
        cy.get("#cactus-icon").click()
        cy.get(".work").should("have.length.gt", 1)
    })
    it ("Modal Works", () => {
        cy.get("#work-img").click()
    })
})
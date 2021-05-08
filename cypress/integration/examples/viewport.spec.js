describe('should test for viewport', () => {
    it('720p resolution', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(1000)
    })
    it('1080p resolution', () => {
        cy.viewport(1980, 1080)
        cy.visit('http://www.example.com')
        cy.wait(1000)
    })
    it('iPhone x', () => {
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com')
        cy.wait(1000)
    })
    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com')
        cy.wait(1000)
    })
})
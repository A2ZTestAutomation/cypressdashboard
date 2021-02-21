describe('Demo Submit Form', () => {
	it('Should fill the form and submit', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.get('#developer-name').type('testuser').debug()
		cy.get('#tried-test-cafe').click()
		cy.get('#submit-button').click().pause()
		cy.get('[data-testid=thank-you-header]').contains('Thank you')
		//cy.get('#article-header').contains('Hello Welcome')
	})
})

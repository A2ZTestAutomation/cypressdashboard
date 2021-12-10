describe('Select Option from Dropdown', () => {
	it('should select option submit form', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.get('#preferred-interface').select('Both')
		cy.get('#preferred-interface').should('be.value', 'Both')
	})
})

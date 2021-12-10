describe('Select Option from Dropdown', () => {
	it('should select option submit form', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.get('#tried-test-cafe').click()
		cy.contains('5').click()
	})
})

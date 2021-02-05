describe('Donor can edit profile page information', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: 'fx:donor_can_edit_profile_page.json',
      headers: {
        uid: 'donor@donor.com',
      },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token/**',
      response: 'fx:donor_can_edit_profile_page.json',
    })
    cy.visit('/')
  })
  describe('successfully', () => {
    it('with valid credentials', () => {
      cy.route({
        method: 'PUT',
        url: 'http://localhost:3000/api/user/**',
        response: { message: 'Your profile has been successfully updated!' },
      })
      cy.get("[data-cy='register-btn']").click()
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type('donor@donor.com')
        cy.get("[data-cy='password']").type('123456')
        cy.get("[data-cy='password-confirmation']").type('123456')
        cy.get("[data-cy='submit-btn']").click()
      })

      cy.get("[data-cy='edit-profile-btn']").click()
      cy.get("[data-cy='profile-form']").within(() => {
        cy.get("[data-cy='company-name']").type('Netto')
        cy.get("[data-cy='adress']").type('Bananvägen 15')
        cy.get("[data-cy='zipcode']").type('12345')
        cy.get("[data-cy='city']").type('Gothenburg')
        cy.get("[data-cy='image']").attachFile('donor2.png')
        cy.get("[data-cy='submit-btn']")
          .scrollIntoView()
          .contains('Save')
          .click()
        cy.get("[data-cy='response-success-message']").should(
          'contain',
          'Your profile has been successfully updated!'
        )
      })
      cy.get("[data-cy='back-btn']").contains('Back').click()
    })
  })
})

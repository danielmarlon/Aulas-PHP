describe('Testing Hello World page', function() {
  it('Visiting page', function() {
    cy.visit('http://localhost:8000') // change URL to match your dev URL
  })
  it('checking content', function() {
    cy.contains('Hello World')
  })
})

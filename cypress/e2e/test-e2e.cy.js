describe('Filtro de productos por categoría', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/products*', { fixture: 'products.json' }).as('getProducts')
    cy.visit('http://localhost:8080/')
    cy.wait('@getProducts')
  })

  it('muestra todos los productos al cargar', () => {
    cy.get('[data-cy=product-card]').should('have.length', 4)
  })

  it('al filtrar por "ropa" solo muestra esos productos', () => {
    cy.get('[data-cy=category-filter]').select('ropa')

    cy.get('[data-cy=product-card]').should('have.length', 2)
    cy.get('[data-cy=product-card-category]').each(($el) => {
      expect($el.text().trim()).to.eq('ropa')
    })
  })

  it('al volver a "Todas las categorias" se recuperan todos los productos', () => {
    cy.get('[data-cy=category-filter]').select('ropa')
    cy.get('[data-cy=category-filter]').select('')
    cy.get('[data-cy=product-card]').should('have.length', 4)
  })
})
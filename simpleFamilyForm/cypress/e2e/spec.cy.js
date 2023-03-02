const URL='http://192.168.0.90:8080/'

context('test simple form',()=>{
  beforeEach(()=>{
    cy.visit(URL)
  })

  it('try insert incorrect data in first input',()=>{
    cy.get('#siguiente').click()
    cy.get('.error').should('be.visible')

    cy.visit(URL)

    cy.get('#cantidad-integrantes').type(-6)
    cy.get('#siguiente').click()
    cy.get('.error').should('be.visible')
  })

  it('try insert incorrect data in second input with no all wrong data',()=>{
    cy.get('#cantidad-integrantes').type(4)
    cy.get('#siguiente').click()
    cy.get('#calcular').click()
    for(let i=1;i<=4;i++){
      cy.get(`:nth-child(${i}) > .error`).should('be.visible')
    }
    cy.get('#resultados').should('not.be.visible')
  })

  it('try insert incorrect data in second input with almost all wrong data',()=>{
    cy.get('#cantidad-integrantes').type(4)
    cy.get('#siguiente').click()
    cy.get(':nth-child(1) > #edadIntegrante0').type(34)
    cy.get(':nth-child(2) > #edadIntegrante1').type(15)
    cy.get('#calcular').click()
    cy.get(`:nth-child(3) > .error`).should('be.visible')
    cy.get(`:nth-child(4) > .error`).should('be.visible')
    cy.get('#resultados').should('not.be.visible')
  })

  it('do it well',()=>{
    cy.get('#cantidad-integrantes').type(4)
    cy.get('#siguiente').click()
    cy.get(':nth-child(1) > #edadIntegrante0').type(34)
    cy.get(':nth-child(2) > #edadIntegrante1').type(15)
    cy.get('#integrantes > :nth-child(3) > #edadIntegrante2').type(54)
    cy.get(':nth-child(4) > #edadIntegrante3').type(56)
    cy.get('#calcular').click()
    cy.get('#resultados').should('be.visible')
    cy.get('#mayor').should('have.value', '56')
    cy.get('#menor').should('have.value', '15')
    cy.get('#promedio').should('have.value', '39.75')
  })
  it('do it well and reset',()=>{
    cy.get('#cantidad-integrantes').type(4)
    cy.get('#siguiente').click()
    cy.get(':nth-child(1) > #edadIntegrante0').type(34)
    cy.get(':nth-child(2) > #edadIntegrante1').type(15)
    cy.get('#integrantes > :nth-child(3) > #edadIntegrante2').type(54)
    cy.get(':nth-child(4) > #edadIntegrante3').type(56)
    cy.get('#calcular').click()
    cy.get('#resultados').should('be.visible')
    cy.get('#reset').click()
    cy.get('#resultados').should('not.be.visible')
    cy.get('#integrantes > :nth-child(1)').should('not.exist')
  })

})
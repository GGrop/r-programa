///<reference types="cypress"/>

const URL='http://127.0.0.1:5500/exchangeAPI/index.html'

context('test simple form',()=>{
  beforeEach(()=>{
    cy.visit(URL)
  })

  it('try insert incorrect data in both inputs',()=>{
    cy.get('#send').click()
    cy.get('#input-date > .error').should('have.text',"Este campo es obligatorio para la busqueda!")
    cy.get('#input-symbol > .error').should('have.text',"Este campo es obligatorio para la busqueda, pruebe con USD!")

    cy.get('#date').type("1994-05-06")
    cy.get('#symbol').type("asd")
    cy.get('#send').click()

    cy.get('#input-date > .error').should('have.text','No tenemos informacion anterior a 1999')
    cy.get('#input-symbol > .error').should('have.text','el simbolo que inserto no existe en nuestra base de datos')

    cy.get('#date').clear()

    cy.get('#date').type("2056-05-06")
    cy.get('#send').click()
    cy.get('#input-date > .error').should('have.text','No puede ingresar una fecha futura')
  })

  it('try insert correct data',()=>{
    cy.get('#date').type("2002-05-06")
    cy.get('#symbol').type("USD")
    cy.get('#send').click()
    cy.get('.loading').should('have.text','Loading...')
    cy.get('#results > :nth-child(2)').should('include.text','AED')
  })

})
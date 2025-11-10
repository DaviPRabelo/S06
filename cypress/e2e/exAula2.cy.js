describe("Teste de criação, registro e login de usuário", () => {
  it.skip("Deve criar um novo usuário, registrar e fazer login com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Davi')
    cy.get('#Text1').type('ivaD');
    cy.get('#username').type('davi123')
    cy.get('#password').type('12345')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")

  })

  it.skip("Deve criar um novo usuário, registrar e fazer login com  falhas", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Davi')
    cy.get('#Text1').type('ivaD');
    cy.get('#username').type('davi123')
    cy.get('.btn-primary').should("be.disabled")

  })
  it("Teste de login função criarUsuario", () => {
    let inf = criarUsuario()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(inf[0])
    cy.get('#password').type(inf[3])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", "Hi " + inf[0] + "!")
  })
  it("Delete usuario", () => {
    let inf = criarUsuario()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(inf[0])
    cy.get('#password').type(inf[3])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", "Hi " + inf[0] + "!")
    cy.get('.btn-danger').click()
    cy.get('.ng-binding').should("contain.text", "User deleted.")

  })
})

function criarUsuario() {
  let hr = new Date().getHours() + new Date().getMinutes();
  let min = new Date().getMinutes();
  let seg = new Date().getSeconds();
  let usuario = "usr" + hr + min + seg;

  let inf = [hr, min, seg, usuario];

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(hr)
  cy.get('#Text1').type(min);
  cy.get('#username').type(seg)
  cy.get('#password').type(usuario)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return inf;
}
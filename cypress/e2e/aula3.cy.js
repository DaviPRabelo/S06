describe('Fluxo de Cadastro de Usuário', () => {

    it('Cria conta', () => {
        criarUsuario()
    })
    it('Cria e Deleta conta criada', () => {
        criarUsuario()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('contain.text', "Account Deleted!")
    })
    it('Cria conta e faz logout', () => {
        let infoLogin = criarUsuario()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain.text', 'Login to your account')
    })
    it('Cria conta, faz logout e login novamente', () => {
        let infoLogin = criarUsuario()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain.text', 'Login to your account')
        cy.get('[data-qa="login-email"]').type(infoLogin[0]);
        cy.get('[data-qa="login-password"]').type(infoLogin[1]);
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain.text', 'Logged in as ' + infoLogin[2])
    })
    it('Cria conta, faz logout e falha login', () => {
        let infoLogin = criarUsuario()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain.text', 'Login to your account')
        cy.get('[data-qa="login-email"]').type(infoLogin[0]);
        cy.get('[data-qa="login-password"]').type("vaierrar");
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('contain.text', 'Your email or password is incorrect!')

    })
    it("Tenta criar outra conta com o mesmo email", () => {
        let infoLogin = criarUsuario()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('Outro Nome')
        cy.get('[data-qa="signup-email"]').type(infoLogin[0])
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('contain.text', 'Email Address already exist!')
    })
})

function criarUsuario() {

    const emailUnico = `teste_${Date.now()}@exemplo.com`
    const nomeUsuario = 'Usuario Teste'
    const senhaUsuario = 'minhasenha123'
    let loginInfo = [emailUnico, senhaUsuario, nomeUsuario]
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type(nomeUsuario)
    cy.get('[data-qa="signup-email"]').type(emailUnico)
    cy.get('[data-qa="signup-button"]').click()
    cy.url().should('include', '/signup')
    cy.contains('Enter Account Information').should('be.visible')
    cy.get('[data-qa="password"]').type(senhaUsuario)
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('1990')
    cy.get('[data-qa="first_name"]').type('Fulano')
    cy.get('[data-qa="last_name"]').type('Silva')
    cy.get('[data-qa="company"]').type('Empresa XYZ')
    cy.get('[data-qa="address"]').type('Rua dos Testes, 123')
    cy.get('[data-qa="address2"]').type('Apto 456')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('California')
    cy.get('[data-qa="city"]').type('Los Angeles')
    cy.get('[data-qa="zipcode"]').type('90001')
    cy.get('[data-qa="mobile_number"]').type('555123456')
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('include', '/account_created')
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    return loginInfo;
}
let loginActions = {
    // função para acessar o login com os elementos de cada campo
    with: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    // alert de perigo caso coloque uma email/senha errado
    expectAlertDanger: function (texto) {
        return this
        .waitForElementVisible('@alertDanger', 10000)
        .assert.containsText('@alertDanger', texto)
    },
    // alert informando caso o usuário deixe em branco o campo email/senha
    expectAlertInfo: function (texto) {
        return this
        .waitForElementVisible('@alertInfo', 10000)
        .assert.containsText('@alertInfo', texto)
    }
}

module.exports = {
    // elementos para preenchemento dos campos email/senha e clique no botão e também os alerts  
    url: '/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}


module.exports = {
    '@tags': ['smoke', '404'],
    
    before: function(browser) {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('cleyton@qa.com.br', 'pwd123')
        sidebar.expectLoggedUser('cleyton')
    },

    'quando eu busco um titulo não cadastrado': function(browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Não é mais um besterol americano')
            .click('@searchIcon')
    },

    'entao devo ver uma mensagemde alerta': function(browser) {
        let movie = browser.page.movie()
        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }
}
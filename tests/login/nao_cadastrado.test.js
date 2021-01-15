module.exports = {
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('cl@qa.com.br', 'ert234')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}
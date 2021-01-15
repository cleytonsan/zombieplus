module.exports = {
    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('cleyton@qa.com.br', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}
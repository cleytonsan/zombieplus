module.exports = {
    'Senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('cleyton@qa.com.br', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}
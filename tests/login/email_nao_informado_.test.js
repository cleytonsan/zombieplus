module.exports = {
    // desabita o test de email não informado.
    '@disabled': true,
    
    'Email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', 'pwd123')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}
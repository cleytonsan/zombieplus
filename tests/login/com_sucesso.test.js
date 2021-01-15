module.exports = {
    '@tags': ['smoke'],
    
    'login com sucesso': (browser) => {

        // acessar ao web
        let login = browser.page.login()
        // acesso a barra lateral
        let sidebar = browser.page.sidebar()
        
        // campos email/senha
        login.with('cleyton@qa.com.br', 'pwd123')
        // barra lateral quando acessa a pagina
        sidebar.expectLoggedUser('cleyton')
    },
    
}
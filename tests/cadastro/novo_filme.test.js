// importando db.js para fazer conecção novo_filme para remover o filme criado, 
//e assim gerar novamente sempre que rodar novo teste 
import pg from '../../lib/db'

let movieData = {}

module.exports = {
    // upload/massa de teste
    before: function(browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: '2002',
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'Resident_Evil_Extinction.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre incidente.'
        }

        // solicita uma remoção do filme quando rodar um novo teste (chamada asincrona)
        pg.removeByTitle(movieData.title)

        // acessar a pagina de login
        let login = browser.page.login()
        // acesso a barra lateral
        let sidebar = browser.page.sidebar()
        // dados do campo de login
        login.with('cleyton@qa.com.br', 'pwd123')
        // verifico se estou logado
        sidebar.expectLoggedUser('cleyton')

    },

    'quando eu faço o cadastro do filme': function (browser) {
        // acesso o formulario de cadastro de filme
        let movie = browser.page.movie()
        // preenche todo do formulario
        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
    },
    'então devo ver o filme na lista': function(browser) {
        let movie = browser.page.movie()

        // Visible => procura o elemento na pagina, mas também procura pelo atributo display
        // Present => verifica se o elemento está em algum lugar da pagina

        movie
            .waitForElementPresent('@list', 5000)
            .assert.containsText('@list', movieData.title)
    } 
}
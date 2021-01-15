module.exports = {
    // antes de cada execução carrega a pagina e dimensiona a janela
    beforeEach: (browser, done) => {
        browser.resizeWindow(1366, 768)
        done()
    },

    // após cada acesso a pagina faz o termino
    afterEach: (browser, done) => {
        browser.end()
        done();
    },
}
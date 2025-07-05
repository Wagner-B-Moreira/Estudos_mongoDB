exports.paginaInicial = (req, res) => {
    res.send(`
  <form action="/enviar" method="POST">
    <input type="text" name="nome" placeholder="Digite seu nome">
    <button type="submit">Enviar</button>
    <button type="button" onclick="alert('Este botão não envia o formulário')">Enviar aqui</button>
  </form>

    `);
}; 



exports.dados = (req, res) => {
    res.send('hey sou sua nova rota de dados ')
};
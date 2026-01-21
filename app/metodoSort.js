let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOredenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOredenados)
}
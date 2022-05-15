## LAYOUT SITE MASSA

- Fiz essa Landing Page, em base de um site, já pronto, porem não estava responsivo, e com alguns erros de acessibilidade e alinhamentos.

* Layout totalmente responsivo, utilizando apenas css, html e javscript

---

## Analisando o html do site original, notei que falta algumas coisas para deixar o site acessivel e semantico.

// exemplo:

- Falta os ALT das imagens
- Layout não tem grid, e por isso, as seções não fica alinhada
- falta tags de acessiblidade, por exemplo, label no formulario,
- não está responsivo
- não é algo que seja ruim, porem colocar estilo direto dentro de das tags, não é uma boa pratica.

  ----- Exemplo
  errado ->

  header {
  background-color: red
  }

  Correto ->

  .header {
  background-color: red
  }

  - Como coloquei acima, por boas práticas, é bom colocar uma classe na tag e estilizar a classe css e não a tag direta.

  Alguns considerações acima, o restante está muito bom.
  Parabéns

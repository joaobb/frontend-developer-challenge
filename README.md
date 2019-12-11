# Desafio | Frontend Developer

> **ATENÇÃO:** Antes de começar, se [cadastre na vaga](https://linxneemuchaordic.recruiterbox.com/) via Recruiterbox **=]**

Olá! Seja bem vindo ao teste para a vaga de **Frontend Developer** para o time de **Customer Operations** da Linx Impulse.

Preparamos um teste que abordará seus conhecimentos em **HTML**, **CSS** e **Javascript**. Você será encaixado na vaga de acordo com seu resultado.

---

## Sobre o desafio

O desafio consiste no *layout* de uma *landing page* com uma grade de produtos e um formulário de *newsletter*. Seu principal objetivo é transformar este *layout* em uma página funcional.

**Link do layout**: https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

### Layout

Você terá que implementar o *layout* de acordo com esse **[mock](https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/)**. O *mock* contém a estrutura do layout e todo o estilo da página.

É importante se ater aos detalhes de tamanho e espaçamento entre os elementos da página, construindo o HTML mais semântico possível utilizando-se das tags do HTML5.

### Comportamento:

Para preencher a página com as informações dos produtos, você terá que consultar esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retornará as informações de **8 produtos** e um **link para a próxima página**.

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada **produto** retornado pela API, um **card de produto** com as respectivas informações deve ser criado na grade de produtos;
- Ao clicar no botão **Ainda mais produtos aqui!** a próxima página da API deve ser consultada, gerando mais **8 produtos** na grade existente, abaixo dos produtos já carregados pela primeira requisição;
- O formulário de *newsletter* com o título **Compartilhe a novidade** deve ter seus campos de *input* validados de acordo com o conteúdo (ex: O campo de email deve conter um email válido);

---

## Instruções

- Faça um **[fork](https://help.github.com/en/articles/fork-a-repo)** deste repositório e crie uma branch com o seu nome (ex: `nome-sobrenome`) que irá conter o código do seu desafio;
- Faça *commits* ao longo do seu desenvolvimento, isso nos ajudará a entender sua linha de raciocínio ;)
- Substitua este **README.md** por outro que contenha as informações de *setup* e a descrição do seu projeto;
- Suba um *live preview* do seu desafio em um dos provedores a seguir, isso nos ajudará a testar sua implementação:
    - **[Now](https://zeit.co/now)**
    - **[Heroku](https://www.heroku.com)**
    - **[Netifly](https://www.netlify.com/)**
    - Qualquer outro semelhante
- Assim que concluir o seu desafio, abra um **[pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)** para o [repositório do desafio](https://github.com/iurykrieger/frontend-developer-challenge) com suas alterações e com o link do *live preview* na descrição;

---

## Dicas

> Crie uma estrutura de arquivos organizada para suas implementações

> Construa o CSS de forma bem estruturada e em um arquivo separado.

> Evite poluir o escopo global do Javascript

> Documente suas funções e seja o mais conciso possível ao escrever seu código

> Seu README.md deve conter as instruções necessárias para qualquer pessoa fazer seu projeto funcionar

> Your code will be better understood in English ;)

## Não conseguiu fazer tudo?
A sua forma de priorizar a entrega também vai ser considerada. Escreva no README.md o que você conseguiu e não conseguiu implementar, descrevendo porque você preferiu priorizar desta maneira.

---

Em caso de dúvidas, [abra uma issue](https://github.com/chaordic/frontend-intern-challenge/issues).

**Boa sorte =]**

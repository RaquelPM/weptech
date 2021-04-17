# Rodar o projeto

## yarn start || npm start

# Estrutura

## --> src/pages
Partes do código que se alteram de acordo com router, no momento nenhuma das pages possui lógica de alteração de dados;

## --> src/components
Partes de código que são usadas em mais de uma page, ou que não se alteram de acordo com o router (como a sidebar que está o tempo todo na tela), neles onde se encontra as animações e onde se chama os hooks para alteração dos dados;

## --> src/hooks
Hooks para alteração de dados divididos de acordo com a "API" (src/consts.js) que alteram

## --> src/media
As imagens usadas no projeto

## --> src/style
Os arquivos de estilo usados no projeto, a Sidebar possui um arquivo separado das pages, os componentes por serem filhos das pages pegam o estilo do mesmo arquivo e por fim o arquivo App.css é onde se encontra os auxialiares que são usados em todo o projeto
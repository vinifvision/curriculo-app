# Currículo App

App mobile construído com Expo/React Native que exibe um currículo interativo e responsivo. Este projeto foi desenvolvido como parte do meu processo de aprendizagem e prática em desenvolvimento mobile com React Native.

## 👨‍💻 Autor

<img src="https://avatars.githubusercontent.com/u/119247208?v=4" width="150px" />

**Vinicius Fernandes**

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://github.com/vinifvision)

> Este é um projeto de estudo pessoal para aprimorar minhas habilidades em:
>
> - React Native e Expo
> - Componentização e reutilização de código
> - Estilização com React Native
> - Boas práticas de desenvolvimento mobile

## 📱 Sobre o Projeto

App mobile construído com Expo/React Native que exibe um currículo interativo e responsivo. Ideal para portar informações pessoais e profissionais em um formato visual limpo e navegável.

Principais características

- Layout responsivo com ScrollView.
- Componentes reutilizáveis para perfil, seções, listas e experiências.
- Links externos para GitHub e LinkedIn usando componentes nativos.
- Simples de rodar e customizar.

Arquivos e símbolos principais

- [`App`](App.js) — [App.js](App.js) (entrada da UI, monta a tela principal)
- [`Perfil`](components/Perfil.js) — [components/Perfil.js](components/Perfil.js)
- [`Experiencia`](components/Experiencia.js) — [components/Experiencia.js](components/Experiencia.js)
- [`TituloSecao`](components/TituloSecao.js) — [components/TituloSecao.js](components/TituloSecao.js)
- [`Lista`](components/Lista.js) — [components/Lista.js](components/Lista.js)
- [`Topico`](components/Topico.js) — [components/Topico.js](components/Topico.js)
- [`ButtonLink`](components/ButtonLink.js) — [components/ButtonLink.js](components/ButtonLink.js)
- [index.js](index.js) — registro do root component
- [package.json](package.json) — scripts e dependências
- [app.json](app.json) — configuração do Expo
- [assets/](assets/) — ícones e imagens usadas pelo app
- [.expo/](.expo/) — metadados do Expo (ignorado no git)
- [.vscode/](.vscode/) — configurações do editor
- [.gitignore](.gitignore) e [.editorconfig](.editorconfig)

Instalação (desenvolvimento)

1. Instale dependências:

```sh
npm install
```

2. Rode o Metro / Expo:

```sh
npm run start
```

3. Emulador / Dispositivo

- Abra no Expo Go (Android/iOS) ou rode no emulador via `npm run android` / `npm run ios`.

Scripts úteis (definidos em [package.json](package.json))

- start: `expo start`
- android: `expo start --android`
- ios: `expo start --ios`
- web: `expo start --web`
- lint:check: `prettier --check .`
- lint:fix: `prettier --write .`

Como o app está organizado

- [App.js](App.js): monta a tela principal e importa componentes.
- [components/Perfil.js](components/Perfil.js): mostra foto, nome, profissão, contatos e botões de rede social.
- [components/Experiencia.js](components/Experiencia.js): seção de experiência com título e descrição.
- [components/TituloSecao.js](components/TituloSecao.js): componente simples de título.
- [components/Lista.js](components/Lista.js): exibe listas de itens (formação, idiomas).
- [components/Topico.js](components/Topico.js): bloco de texto para tópicos.
- [components/ButtonLink.js](components/ButtonLink.js): botão que abre URLs externas com ícone.

Personalização rápida

- Troque os dados do usuário em [`App`](App.js) (props passadas para [`Perfil`](components/Perfil.js) e [`Experiencia`](components/Experiencia.js)).
- Substitua imagens em [assets/](assets/) e ajuste caminhos em [app.json](app.json).
- Adapte estilos nos arquivos de componente (cada componente usa StyleSheet).

Boas práticas e dicas

- Use o `prettier` via `npm run lint:fix` para padronizar o código.
- Mantenha imagens otimizadas para reduzir tamanho do app.
- Ao adicionar novos ícones, consulte `@expo/vector-icons` (usado em [components/Perfil.js](components/Perfil.js) e [components/ButtonLink.js](components/ButtonLink.js)).

Contribuição

- Fork e pull request com alterações pequenas e descritas.
- Testes manuais: rode `npm run start` e verifique em dispositivo/emulador.

Observações

- Projeto usando Expo SDK conforme configurações em [app.json](app.json).
- Diretório [.expo/](.expo/) incluído localmente para desenvolvimento; é ignorado pelo Git conforme [.gitignore](.gitignore).

Contato

- Código-fonte e personalizações estão neste repositório local. Para editar o conteúdo exibido, altere os valores em [`App`](App.js) e os componentes em [components/](components/).

Arquivos do workspace (referência)

- [.editorconfig](.editorconfig)
- [.gitignore](.gitignore)
- [App.js](App.js)
- [app.json](app.json)
- [index.js](index.js)
- [package.json](package.json)
- [.expo/README.md](.expo/README.md)
- [.vscode/](.vscode/)
- [assets/](assets/)
- [components/ButtonLink.js](components/ButtonLink.js)
- [components/Experiencia.js](components/Experiencia.js)
- [components/Lista.js](components/Lista.js)
- [components/Perfil.js](components/Perfil.js)
- [components/TituloSecao.js](components/TituloSecao.js)
- [components/Topico.js](components/Topico.js)

Licença

- Ajuste conforme sua necessidade (nenhuma licença definida por padrão).

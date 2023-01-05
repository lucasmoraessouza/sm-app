# App sm-mobile

Este é o projeto do aplicativo da StackedSports. Antes de começar a desenvolver, leia este README!

## Tabela de conteúdos

- [Tecnologias usadas](#tecnologias-usadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Contribuindo](#contribuindo)

## Tecnologias usadas

As tecnologias usadas nesse projeto são:

- React;
- React Native;
- Expo;
- Styled Component;
- React Navigation;

Caso tenha dificuldade com alguma delas, é só pedir ajuda :)

## Pré-requisitos

Antes de começar a desenvolver, verifique se você já possui todos os pré-requisitos [Tech](#tech) descritos abaixo:

### Tech

Antes de instalar e executar o projeto, você precisará das seguintes ferramentas:

- Node.js (de preferência a versão stable mais recente);
- Yarn;

#### Instalando Node.js

Para instalar o Node.js, siga a [documentação oficial](https://nodejs.dev/learn/how-to-install-nodejs).

#### Instalando Yarn

Para instalar o Yarn, siga a [documentação oficial](https://classic.yarnpkg.com/en/docs/install/#windows-stable);

#### Criar conta no expo

Para facilitar o desenvolvimento, você precisará do expo, bem como uma conta nessa plataforma. Com ela podemos executar o código no device com mais facilidade.
Para configurar o expo no seu device e na sua máquina, siga o passo a passo a seguir:

- Instale o app `Expo Go`;
- Crie uma conta no expo com o seu email;
- Faça login no app `Expo Go`;
- No seu computador execute o comando a seguir e insira a conta criada anteriormente:
  ```
  npx expo login
  ```

## Instalação

Tendo os pré-requisitos acima, basta instalar as dependências com o comando:

```
yarn
```

## Scripts disponíveis

### `yarn start`

Esse comando executa o aplicativo localmente.\

Como você já está logado no expo com a sua máquina e também no app `Expo Go`, ao acessar o aplicativo `Expo Go`, na seção `Recently in development` deve aparecer um projeto em execução. Selecione ele e iniciará o processo de execução da aplicação no device. Lembre-se de estar conectado na mesma internet em ambos dispositivos!

### `yarn run android`

Esse comando assim com o anterior, também executa o projeto localmente, porém ele tenta abrir o projeto automaticamente em um dispositivo android conectado. Logo, ele irá procurar, ou por um device conectado por USB ao computador, ou por um emulador de android.

### `yarn run ios`

Esse comando funciona exatamente como o anterior, porém para dispositivos iOS.

##### Problemas conhecidos

-

## Estrutura de pastas

A estrutura é a seguinte:

```
├── [assets](#assets)/
├── src/
│   ├── [@types](#@types)/
│   ├── [assets](#src/assets)/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── img/
│   ├── [components](#components)/
│   ├── [modules](#modules)/
│   ├── [routes](#routes)/
│   ├── [screens](#screens)/
│   ├── [services](#services)/
│   ├── [theme](#theme)/
├── [app.json](#app.json)
├── [App.tsx](#App.tsx)
└── ...
```

### Pastas

#### `assets`

Nessa pasta ficam os assets do ícone do aplicativo e da splash screen. Ambos são referenciados no arquivo `app.json`;

#### `@types`

Nessa pasta ficam os tipos e interfaces utilizados ao longo do projeto. Aqui os tipos e interfaces estão agrupados por domínio, ou seja, interfaces e tipos que se correlacionam ficam num mesmo arquivo.

#### `services`

Essa pasta é destinada a arquivos de comunicação externa, ou seja, APIs, e helpers e contantes relacionados as APIs.

#### `src/assets`

Aqui ficam os assets comuns do projeto.

#### `components`

Aqui ficam os componentes que são reutilizados amplamente ao longo do código.

#### `modules`

A pasta `modules` agrupa os módulos existentes. Um módulo é um conjunto de features que tem um propósito em comum. Por exemplo, módulo de pagamentos, autenticação, etc.

#### `routes`

Nessa pasta ficam as definições de rotas do projeto. As rotas estão todas em pastas `routes` e o arquivo inicial é o `index.tsx`, a partir dele é possível identificar todas definições de navegação do aplicativo. Todo o processo de navegação é feita pela biblioteca `react-navigation` na versão 6.

Os navigators são utilizados de forma encadeada.

#### src/Index.js

Nesse arquivo fica o import das rotas e algumas configurações de mudança de estado da aplicação.

#### app.json

Esse é o arquivo de configuração do `Expo`. É nesse arquivo que configuramos a versão do aplicativo, a splash screen, o ícone do app e diversas outras.

Para mais informações sobre esse arquivo de configurações, acesse a [documentação do Expo](https://docs.expo.io/versions/latest/config/app/).

#### App.tsx

Esse arquivo é o ponto de entrada da aplicação.

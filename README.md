
# CodeXperience

CodeXperience é um evento de programação que acontece em Juiz de Fora, MG, com foco em inovação, tecnologia e aprendizado colaborativo. Explore as mais recentes tendências em desenvolvimento de software, participe de workshops práticos, e conecte-se com outros desenvolvedores.

![CodeXperience Logo](https://live.staticflickr.com/65535/53919991108_4100f6c12a_n.jpg)

[![Website](https://img.shields.io/badge/website-online-brightgreen)](https://codexperience.com.br/)
[![GitHub issues](https://img.shields.io/github/issues/FernandoSegregio/CodeXperience)](https://github.com/FernandoSegregio/CodeXperience/issues)
[![GitHub license](https://img.shields.io/github/license/FernandoSegregio/CodeXperience)](https://github.com/FernandoSegregio/CodeXperience/blob/main/LICENSE)

## 🚀 Projeto

Evolução a cada edição do Evento.

### 🚀 Demo

Confira o site oficial do evento [aqui](https://codexperience.com.br/).

### 🛠️ Tecnologias Utilizadas

- **React + Vite** - Biblioteca para construir interfaces de usuário
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Superset JavaScript para tipagem estática
- **EsLint** - Armazenamento de arquivos na nuvem

### 🧩 Funcionalidades

- **Contadores regressivos** para o início do evento
- **Incorporação de mapas do Google Maps** para exibir a localização do evento
- **Incorporação de publicações do Instagram** para engajar os participantes
- **Sistema de navegação suave** para uma experiência de usuário fluida
- **Renderização dinâmica de carrosséis de imagens** 
- **Efeito parallax** 
 
### 📁 Estrutura de Pastas

```bash
CODExPERIENCE-SITE/
├── Docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Carrousel/
│   │   │   └── index.tsx
│   │   ├── Countdown/
│   │   │   └── index.tsx
│   │   ├── Divider/
│   │   │   └── index.tsx
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   ├── Header/
│   │   │   ├── mocks/
│   │   │   │   └── index.ts
│   │   │   └── index.tsx
│   │   ├── Hero/
│   │   │   └── index.tsx
│   │   ├── Location/
│   │   │   └── index.tsx
│   │   ├── Parallax/
│   │   │   └── index.tsx
│   │   ├── Partners/
│   │   │   └── index.tsx
│   │   ├── Pass/
│   │   │   └── index.tsx
│   │   ├── Schedule/
│   │   │   └── index.tsx
│   │   └── Talks/
│   │       └── index.tsx
│   ├── utils/
│   │   └── classNames.tsx
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── .nvmrc
├── index.html
├── index.css
├── LICENSE
├── package.json
├── postcss.config.js
├── pwa-assets.config.ts
├── README.md
├── robots.txt
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
├── vite-env.d.ts
├── yarn.lock
└── PWA/
    ├── PWA-Badge.css
    └── PWA-Badge.tsx
````
 
### 🧱 Componentes da Página 

| **Componente**   | **Função Principal**                                                                 |
|------------------|--------------------------------------------------------------------------------------|
| **Hero**         | Seção inicial (banner principal com logotipo, chamada para ação e tema do evento).  |
| **Countdown**    | Exibe contagem regressiva para a data do evento.                                    |
| **Talks**        | Lista das palestras e palestrantes confirmados.                                     |
| **ScheduleTable**| Tabela com a programação detalhada do evento.                                       |
| **Parallax**     | Seção visual com efeito parallax, usada para transições e impacto visual.           |
| **Location**     | Mostra o local físico do evento (mapa, endereço e instruções).                      |
| **Divider**      | Espaçamento entre seções, ajustável via `height` prop.                              |
| **Pass**         | Informações sobre ingressos, passes ou inscrições.                                  |
| **Partners**     | Logos e informações dos patrocinadores e parceiros.                                 |
| **Footer**       | Rodapé com links úteis e direitos autorais.                                         |
 
### Versões do projeto

- Branches
   - main
   - dev-v2024
   - dev-v2025
  
- Configuração do Projeto no Vercel
  - codexperience-2024 → domínio codexperience.com.br/2024
  - codexperience-2025 → domínio principal codexperience.com.br

## Versão 2025 

Trataremos a lista de novas funcionalidades e ajustes no design para a nova edição do evento.

### Inserir

- [x] fazer da página da edição 2024 uma opção do menu
- [x] na versão 2024: 
    - [x] inserir um botão para ir para a versão 2025
    - [x] adicionar "edição 2024" com destaque 
- [x] contador regressivo 
- [x] data e local : CONFIRMADO
- [] patrocinador : CONFIRMADO
- [] inserir imagens do evento
- [x] proposta de apoio 2025 (apresentei para a VOL)
- [] verificar google maps 
- [x] Quero a logo com 2025

### Remover

- [x] programação 
- [x] patrocinadores

## 📦 Instalação e Uso

### Pré-requisitos

- **Node.js** versão 20 ou superior
- **Yarn** como gerenciador de pacotes

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/FernandoSegregio/CodeXperience.git
   cd CodeXperience
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

## 📝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/FernandoSegregio/CodeXperience/issues) ou enviar um pull request.

### Como Contribuir

1. Fork este repositório.
2. Crie uma nova branch a partir da main: `git checkout -b minha-branch`.
3. Faça suas alterações e commit: `git commit -m 'Minha contribuição'`.
4. Envie para a branch original: `git push origin minha-branch`.
5. Abra um pull request da sua branch para a main.
6. Aguarde aprovação de seu pull request

## Licença

Este projeto está licenciado sob a Licença BSD de 2 Cláusulas.

### Resumo da Licença BSD de 2 Cláusulas

- **Redistribuição e uso:** São permitidos com ou sem modificação, desde que as seguintes condições sejam atendidas:
  - A redistribuição do código fonte deve manter o aviso de copyright, esta lista de condições e o aviso de isenção de responsabilidade.
- **Isenção de responsabilidade:** O software é fornecido "como está", sem garantias expressas ou implícitas, incluindo, mas não se limitando às garantias implícitas de comercialização e adequação para um propósito específico. Em nenhum caso o titular dos direitos autorais ou contribuintes serão responsáveis por quaisquer danos decorrentes do uso do software.

Para mais informações, consulte o arquivo [LICENSE](LICENSE).

## 👥 Autores

- **Tech hub JF** - [LinkedIn](https://www.linkedin.com/company/tech-hub-jf/) 

# 🧭 Documentação do Projeto Padrão Executivo's Digital Next.js 15

## 📌 Sumário

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação e Execução](#instalação-e-execução)
4. [Scripts Disponíveis](#scripts-disponíveis)
5. [Estrutura de Pastas](#estrutura-de-pastas)
6. [Rotas e Navegação](#rotas-e-navegação)
7. [Variáveis de Ambiente](#variáveis-de-ambiente)

---

## 📖 Visão Geral

Projeto padrão desenvolvido com **Next.js 15(App Router)** e **React 18** para ser utilizado como base do desenvolvimento de projetos futuros da Executivo's Digital.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **ESLint + Prettier + Husky**

---

## 🧪 Instalação e Execução

```bash
# Clonar repositório
npx create-next-app@latest -e https://github.com/ExecutivosDigital/base-project-web

cd base-project-web

# Instalar dependências
yarn

# Executar localmente
yarn dev

```

---

## 🚀 Scripts Disponíveis

1. Rodar projeto localmente:

   ```
   yarn dev
   ```

2. Criar build de produção:

   ```
   yarn build
   ```

3. Realizar checagem de padronização de código:

   ```
   yarn lint
   ```

   ***

## 📁 Estrutura de Pastas

.
├── src/ # Src
│ ├── app/ # App Router do Next 15
│ │ ├── page.tsx # Página principal
│ │ ├── globals.css # Estilizações e configurações de TailwindCSS
│ │ ├── layout.tsx # Layout global
│ │ └── dashboard/ # Página
│ │ ├── page.tsx # Tela
│ │ ├── layout.tsx # Layout da Tela
│ │ └── components/ # Componentes da Tela
│ │ └── example.tsx # Componente
│ ├── components/ # Componentes reutilizáveis
│ ├── lib/ # Configurações e utils
│ └── context/ # Integração com APIs
├── public/ # Arquivos estáticos
├── .env.local # Variáveis de ambiente
└── tsconfig.json # Configurações TypeScript

---

## 🧭 Rotas e Navegação

```
/login → Tela de autenticação
```

```
/ → Home
```

---

## 🔐 Variáveis de Ambiente

```
API_URL=""
```

```
USER_TOKEN=""
```

---

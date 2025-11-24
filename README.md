# 🧾 Multi-Step Form com TypeScript

Este projeto foi desenvolvido com o objetivo de **aprender e praticar TypeScript na prática**, utilizando um formulário multi-step (formulário em etapas).

O foco principal foi trabalhar com:
- Tipagem de props
- Tipagem de estados
- Types
- Organização de lógica em componentes reutilizáveis

---

## 🚀 Tecnologias Utilizadas

- TypeScript
- React
- Vite
- Styled Components
  
---

## ✨ Funcionalidades

- Formulário dividido em múltiplas etapas  
- Validação de dados por etapa  
- Controle de estado global do formulário  
- Tipagem forte para dados do usuário  
- Navegação entre etapas
- Persistência de dados

## 📸 Preview do Projeto
<img width="1918" height="903" alt="image" src="https://github.com/user-attachments/assets/9c8d6cf7-ef03-49c7-922b-eb4d29eb8cf2" />
<img width="1920" height="909" alt="image" src="https://github.com/user-attachments/assets/c22a18f8-03de-4a7f-8c3d-657cb0d2e613" />
<img width="1915" height="907" alt="image" src="https://github.com/user-attachments/assets/aea8dbe9-7e1d-4412-9bbf-f0023173b749" />




--
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

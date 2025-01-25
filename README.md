# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
NamuWikiProject
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 2408a9f09eae19150818b4f0db5d1b70744828
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 1f
│  │  │  └─ fef600d959ec9e396d5a260bd3f5b927b2cef8
│  │  ├─ 20
│  │  │  └─ 002ae956e5d0be77603795c137ad3c77dcf237
│  │  ├─ 35
│  │  │  └─ 8ca9ba93f089b0133f05933f133a446402eb17
│  │  ├─ 52
│  │  │  └─ 639517332a1671849f5a72e46a08aff316f172
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 74
│  │  │  └─ 872fd4af60fb8d6cdb7d27e6c587ee0b6e1df7
│  │  ├─ 81
│  │  │  └─ 38453a3afa9ebc957b906ad4bd380c952a0a28
│  │  ├─ 89
│  │  │  └─ be2d8fbefafc1d860ed00069aa08f141939faa
│  │  ├─ 8b
│  │  │  └─ 0f57b91aeb45c54467e29f983a0893dc83c4d9
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ a4
│  │  │  └─ 61c505f1f0c24ab12240ac3f7fa374dfa237fb
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ 8139392a650c1acd106eaca80bc5b3e4f24a57
│  │  ├─ ab
│  │  │  └─ 4a781db1355a86c3a0520397e284d60ad06519
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ be
│  │  │  └─ f5202a32cbd0632c43de40f6e908532903fd42
│  │  ├─ bf
│  │  │  └─ e41651081b0ae4d2128573015b728b3e6709f6
│  │  ├─ c7
│  │  │  └─ 2c0ae0b4331293756576f84719b60d50ab37db
│  │  ├─ cc
│  │  │  └─ 6fb5242be0ead50bb2a581690e9cce33681cde
│  │  ├─ d0
│  │  │  └─ b9b8a0c27763d9a0144c67cbbdeff59bd1d949
│  │  ├─ d6
│  │  │  └─ 2912bae7d11dd2f15aa17e564b711fac5cacb4
│  │  ├─ db
│  │  │  └─ 0becc8b033a4a78144f4a3bb852082fe91cd62
│  │  ├─ dc
│  │  │  └─ 6f382e549d0cda911f90d2811cb9d4b4743301
│  │  ├─ dd
│  │  │  └─ 94cf2ac9851cb5e32797e4cef0a827ba878bc5
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ f2
│  │  │  └─ 528f1f1ff7e6359aaac7cef7f5aa4ee588c5a7
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  ├─ App.tsx
│  ├─ assets
│  │  └─ fonts
│  │     └─ PretendardVariable.ttf
│  ├─ components
│  │  ├─ DetailPage.tsx
│  │  └─ MainPage.tsx
│  ├─ hooks
│  ├─ index.css
│  ├─ main.tsx
│  ├─ models
│  ├─ style
│  ├─ utils
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
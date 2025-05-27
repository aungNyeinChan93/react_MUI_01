# React + Vite

This template offers a minimal yet robust starting point for building React applications using Vite. It comes pre-configured with Hot Module Replacement (HMR) for a fast development experience and includes a basic ESLint setup to help maintain code quality.

### Features

- **React + Vite Integration:** Enjoy lightning-fast development and build times with Vite's modern tooling and React's component-based architecture.
- **Hot Module Replacement (HMR):** Instantly see code changes reflected in the browser without a full reload, preserving component state.
- **ESLint Configuration:** Basic linting rules are included to catch common issues and enforce code consistency.

### Official Plugins

You can choose between two official plugins for React integration:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Uses [Babel](https://babeljs.io/) for Fast Refresh and supports a wide range of Babel plugins and presets.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses [SWC](https://swc.rs/) for even faster builds and refreshes, with a focus on performance.

### Customizing ESLint

For larger or production-grade projects, it's recommended to expand the ESLint configuration:

- **TypeScript Support:** Integrate TypeScript for static type checking and improved developer experience. See the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for a ready-to-use setup.
- **Type-Aware Linting:** Enable type-aware rules with [`typescript-eslint`](https://typescript-eslint.io) to catch more complex issues and enforce best practices.
- **Additional Plugins:** Consider adding plugins such as `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, and `eslint-plugin-import` for enhanced linting of React patterns, accessibility, and import/export syntax.

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   npm run json
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

Refer to the [Vite documentation](https://vitejs.dev/guide/) for more details on configuration and customization.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/aungNyeinChan93/react_MUI_01)

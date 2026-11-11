/// <reference types="vite/client" />
/// <reference types="vue/jsx" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_MOCK_DEMO?: 'true' | 'false'
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

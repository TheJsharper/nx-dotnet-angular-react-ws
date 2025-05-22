import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
  'react',
  'react-router-dom',
  'react-dom/client',
]);
const config: ModuleFederationConfig = {
  name: 'use_effect_app',
  exposes: {
    './Module': './src/remote-entry.ts',
  },

 /* shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
  },*/
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

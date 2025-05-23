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

   additionalShared: [

    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.3.1'
      }
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '18.3.1'
      }
    }
    ,
    /*{
      libraryName: 'react-router-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '6.29.0'
      }
    }*/
  ]
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

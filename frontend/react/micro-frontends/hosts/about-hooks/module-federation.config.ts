import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
  'react',
]);
//'react-dom/client',
//'react-router-dom',
const config: ModuleFederationConfig = {
  name: 'about-hooks',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  /*shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
  },*/
  shared: (libraryName, defaultConfig) => {
    return false;
  },

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
  ],
  remotes: ['use_state_app', 'use_effect_app'],
};
/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

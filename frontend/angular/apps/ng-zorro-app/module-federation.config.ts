import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
  'bootstrap-icons'
]);


const config/**/: ModuleFederationConfig = {
  name: 'ng-zorro-app',
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
  shared: (libraryName, defaultConfig) => {
    console.log("RUNTIME Product  ===>", libraryName, defaultConfig)
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return {...defaultConfig, eager: true};
  },
  additionalShared: [
    {
      libraryName: '@nx/angular/mf',
      sharedConfig: { singleton:true, eager:true}, // also worked with your settings;
      
    }
  ],
  remotes: []
};

export default config;

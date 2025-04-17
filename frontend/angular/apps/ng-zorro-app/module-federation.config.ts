import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
]);
const config: ModuleFederationConfig = {
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

  remotes: ['test-lib', 'mf-todo'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.log(`Shared library: =======>x${libraryName}`);
      return defaultConfig;
    }
    //console.log(`Shared library: =======>x${libraryName}`);

    // Returning false means the library is not shared.
    return defaultConfig;
  },
  additionalShared: ['bootstrap'],
  disableNxRuntimeLibraryControlPlugin: false,
}

export default config;

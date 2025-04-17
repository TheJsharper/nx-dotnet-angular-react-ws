import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
]);
const config: ModuleFederationConfig = {
  name: 'test-lib',
  exposes: {
    './Routes': 'frontend/angular/views/test-lib/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.log(`Shared library: =======>x${libraryName}`);
      return defaultConfig;
    }
    console.log(`Shared library: =======>x${libraryName}`);

    // Returning false means the library is not shared.
    return defaultConfig;
  },
   additionalShared: ['bootstrap'],
   disableNxRuntimeLibraryControlPlugin: false,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

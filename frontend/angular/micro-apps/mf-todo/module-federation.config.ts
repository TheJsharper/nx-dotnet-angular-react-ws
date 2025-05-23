import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'mf-todo',
  exposes: {
    './Routes': 'frontend/angular/micro-apps/mf-todo/src/lib/todo.router.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

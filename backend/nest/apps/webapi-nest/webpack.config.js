
import { NxAppWebpackPlugin } from '@nx/webpack/app-plugin.js';
import { join } from 'path';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const output = {
  path: join(__dirname, '../../../../dist/backend/nest/apps/webapi-nest'),
};
export const plugins = [
  new NxAppWebpackPlugin({
    target: 'node',
    compiler: 'tsc',
    main: './src/main.ts',
    tsConfig: './tsconfig.app.json',
    assets: ['./src/assets'],
    optimization: false,
    outputHashing: 'none',
    generatePackageJson: true,
    
  }),
];

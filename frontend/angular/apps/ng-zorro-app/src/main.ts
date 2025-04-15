import {init} from '@module-federation/enhanced/runtime';
fetch('/assets/module-federation.manifest.json')
  .then((response) => response.json())
  .then((manifest:Record<string, string>) => 
    Object.entries(manifest).map(([key, value]) => ({name:key, entry:value})) 

    
  ).then((remotes) => init({name:'employee', remotes}))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

/*

(async () => await import('./bootstrap'))();
export {}*/
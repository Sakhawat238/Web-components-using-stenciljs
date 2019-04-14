import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pepsa',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null 
    }
  ],
  plugins: [
    sass()
  ],
  bundles: [
    { components: ['s-modal'] },
    { components: ['s-backdrop'] },
    { components: ['s-side-drawer'] }
  ]
};

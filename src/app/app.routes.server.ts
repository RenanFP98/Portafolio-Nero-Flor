import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'artist/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{id: 'female'}, {id: 'male'}];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

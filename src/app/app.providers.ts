import { InjectionToken, Provider } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export const PAGE_TITLE = new InjectionToken<string | undefined>(
  'Provides page title for active route.'
);

export const pageTitleFactory = (router: Router) => {
  return router.events.pipe(
    filter((event) => event instanceof ActivationEnd),
    map((event) => event as ActivationEnd),
    map(({ snapshot }: ActivationEnd) => snapshot.data.title)
  );
};

export const APP_PROVIDERS: Provider[] = [
  {
    provide: PAGE_TITLE,
    deps: [Router],
    useFactory: pageTitleFactory,
  },
];

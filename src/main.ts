import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
  provide(LocationStrategy, {useClass: PathLocationStrategy})
]);

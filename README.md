# ngx-translate-jsonp-http-loader

# Description

Load `ngx-translate` language files from another domain without CORS problem

## Installation:

```
npm i @ngx-translate/core --save
npm i ngx-translate-jsonp-loader --save
```

## Usage:

Adjustments in the app.module.ts

```ts
import {
  HttpClient,
  HttpClientModule,
  HttpClientJsonpModule
} from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslatePoHttpLoader } from '@biesbjerg/ngx-translate-po-http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateJsonLoader(http, 'assets/i18n', '.js');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

The callback function `ng_jsonp_callback_0` needs to be added to the language translation files in the i18n folder

```js
ng_jsonp_callback_0({
  title: 'this is my title',
  'btn-text': 'click here'
});
```

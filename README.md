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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateJsonLoader } from 'ngx-translate-jsonp-loader';

export function createTranslateLoader() {
  return new TranslateJsonLoader('assets/i18n', '.js');
}

@NgModule({
  imports: [
    BrowserModule,
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

The callback function `ngxTranslateCallback` needs to be added to the language translation files in the i18n folder.

```js
ngxTranslateCallback({
  title: 'this is my title',
  'btn-text': 'click here'
});
```

If you have more than one angular app on one page the callback function can be namespaced by providing a namespace as third parameter in constructor.
This will require to adjust the language files according to the namespace `ngxTranslateCallback` function becomes `[ your namespace ]Callback`.

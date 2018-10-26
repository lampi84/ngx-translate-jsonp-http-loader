import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TranslateJsonLoader implements TranslateLoader {
  /**
   * Translation domain
   */

  constructor(
    protected _http: HttpClient,
    protected _path: string = './assets/i18n',
    protected _suffix: string = '.js'
  ) {}

  /**
   * Gets the translations from file
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable<any> {
    return this._http
      .jsonp(`${this._path}/${lang}${this._suffix}`, 'callback')
      .pipe(
        map((contents: JSON) => {
          console.log(contents);
          return contents;
        })
      );
  }
}

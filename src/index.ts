import { TranslateLoader } from '@ngx-translate/core';
import { Observable, BehaviorSubject } from 'rxjs';

export class TranslateJsonLoader implements TranslateLoader {
  /**
   * Translation domain
   */

  constructor(
    protected _path: string = './assets/i18n',
    protected _suffix: string = '.js',
    protected _namespace: string = 'ngxTranslate'
  ) {}

  /**
   * Gets the translations from file
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable<any> {
    let translationReturn = new BehaviorSubject<any>('');

    // Setup a callback function
    window[this._namespace + 'Callback'] = translations => {
      translationReturn.next(translations);
    };

    // Insert script
    const translationScript = document.createElement('script');
    translationScript.setAttribute(
      'src',
      `${this._path}/${lang}${this._suffix}`
    );
    document.head.appendChild(translationScript);

    return translationReturn.asObservable();
  }
}

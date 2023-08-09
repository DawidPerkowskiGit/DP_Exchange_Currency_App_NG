// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ENPOINT: 'http://localhost:8080/api',
  NG_API_KEY: process.env['NG_API_KEY'] || 'DEFAULT_VALUE',
  // DEV_MODE: process.env['DEV_MODE'] || 'development',
  CURRENCIES_URL: '/currencies',
  EXCHANGE_URL: '/exchange',
  API_KEY_ATTRIBUTE: 'apiKey='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDrYYwn8joas5nm8jJnBnZDqb9MsV-g2qY",
    authDomain: "angularpwa-21e2f.firebaseapp.com",
    databaseURL: "https://angularpwa-21e2f.firebaseio.com",
    projectId: "angularpwa-21e2f",
    storageBucket: "angularpwa-21e2f.appspot.com",
    messagingSenderId: "374270193194",
    appId: "1:374270193194:web:60b0312a6289aaefa0dd53",
    measurementId: "G-9DK36E5GQ6"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

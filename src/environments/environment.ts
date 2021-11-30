// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from "./interface";

export const environment: Environment = {
  production: false,
  fbDbUrl: 'https://rboard-bbecb-default-rtdb.europe-west1.firebasedatabase.app',
  firebase: {
    apiKey: "AIzaSyDik5ZTQVs6F-2QIOAZjgdvqLe9MxDBmls",
    authDomain: "rboard-bbecb.firebaseapp.com",
    databaseURL: "https://rboard-bbecb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rboard-bbecb",
    storageBucket: "rboard-bbecb.appspot.com",
    messagingSenderId: "810825238783",
    appId: "1:810825238783:web:9e8a43a08030c1bd0e64ca"
  },
  // apiKey: 'AIzaSyA6_1ztWEbxKa9iNG-hF43n0ICaJ5SymwA',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

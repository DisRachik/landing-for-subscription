// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import header from 'locales/en/header.json';
import ns2 from 'locales/en/ns2.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'header';
    // custom resources type
    resources: {
      header: typeof header;
      ns2: typeof ns2;
    };
    // other
  }
}

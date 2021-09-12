const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  react: { useSuspense: false },
  localePath: path.resolve('./locales'),
};
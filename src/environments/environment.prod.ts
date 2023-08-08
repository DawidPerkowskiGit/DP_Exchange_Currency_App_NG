export const environment = {
  production: true,
  API_ENPOINT: 'http://exchangecurrencyapp-dp-render.onrender.com/api',
  NG_API_KEY: process.env['NG_API_KEY'] || 'DEFAULT_VALUE',
  CURRENCIES_URL: '/currencies',
  EXCHANGE_URL: '/exchange',
  API_KEY_ATTRIBUTE: 'apiKey='
};

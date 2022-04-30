// @type {import('next').NextConfig}
const withImages = require('next-images');
// const withOffline = require('next-offline');
const withPwa = require('next-pwa');

const runtimeCaching = require('next-pwa/cache');

const nextConfig = withImages({
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    SPOTIFY_OAUTH_TOKEN: process.env.SPOTIFY_OAUTH_TOKEN,
    ACCUWEATHER_CURRENT_CONDITIONS: process.env.ACCUWEATHER_CURRENT_CONDITIONS,
    ACCUWEATHER_API_KEY: process.env.ACCUWEATHER_API_KEY,
    ACCUWEATHER_CITY_ID: process.env.ACCUWEATHER_CITY_ID,
    LASTFM_API_KEY: process.env.LASTFM_API_KEY,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
  },
  images: { domains: ['localhost', 'strapi-cms-rw.herokuapp.com', 'i.scdn.co', 'rwietter-strapi-cms.herokuapp.com', 'res.cloudinary.com'] },
});

module.exports = withPwa(nextConfig, {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
});

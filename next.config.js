// @type {import('next').NextConfig}
const withImages = require("next-images");
const { withPlaiceholder } = require("@plaiceholder/next");

const withPWA = require("next-pwa")({
	dest: "public",
});

const nextConfig = withImages({
	reactStrictMode: true,
	productionBrowserSourceMaps: false,
	env: {
		REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
		// SPOTIFY_OAUTH_TOKEN: process.env.SPOTIFY_OAUTH_TOKEN,
		ACCUWEATHER_CURRENT_CONDITIONS: process.env.ACCUWEATHER_CURRENT_CONDITIONS,
		ACCUWEATHER_API_KEY: process.env.ACCUWEATHER_API_KEY,
		ACCUWEATHER_CITY_ID: process.env.ACCUWEATHER_CITY_ID,
		LASTFM_API_KEY: process.env.LASTFM_API_KEY,
		LASTFM_USERNAME: process.env.LASTFM_USERNAME,
		SITE_URL: process.env.SITE_URL,
	},
	images: {
		domains: [
			"localhost",
			"vitals.vercel-insights.com",
			"i.imgur.com",
			"lastfm.freetls.fastly.net",
			"strapi-cms-rw.herokuapp.com",
			"i.scdn.co",
			"rwietter-strapi-cms.herokuapp.com",
			"res.cloudinary.com",
			"picsum.photos",
		],
		formats: ["image/webp"],
		disableStaticImages: true,
	},
});

module.exports = withPWA(withPlaiceholder(nextConfig));

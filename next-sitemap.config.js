/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://rwietterc.xyz/",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/*" },
			{ userAgent: "Twitterbot", allow: "/*" },
			{ userAgent: "Googlebot", allow: "/*" },
			{ userAgent: "Bingbot", allow: "/*" },
			{ userAgent: "Slurp", allow: "/*" },
			{ userAgent: "DuckDuckBot", allow: "/*" },
		],
	},
};

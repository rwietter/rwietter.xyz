/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import { Feed } from "feed";
import { type IArticles } from "features/blog/ts";
import { remark } from "remark";
import remarkHtml from "remark-html";

export default async function generateRssFeed(
	posts: IArticles[],
): Promise<void> {
	const isProduction = process.env.NODE_ENV === "production";
	const url = isProduction
		? process.env.SITE_URL || "https://rwietterc.xyz"
		: "http://localhost:3000";

	const feedOptions = {
		title: "Maurício Witter | RSS Feed",
		description: "RSS feed for Maurício Witter blog",
		site_url: url,
		feed_url: `${url}/rss.xml`,
		image_url: `${url}/icons/mstile-310x310.png`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}, Maurício Witter`,
		id: url,
		author: {
			email: "mauriciobw17@gmail.com",
			name: "Maurício Witter",
			link: "https://twitter.com/rwietter",
		},
		favicon: `${url}/favicon.ico`,
		feedLinks: {
			rss2: `${url}/rss.xml`,
			json: `${url}/rss.json`,
			atom: `${url}/rss.atom`,
		},
		generator: "Feed for Node.js",
		link: url,
		image: `${url}/icons/mstile-310x310.png`,
		updated: new Date(),
		language: "pt-BR",
		feed: "https://rwietterc.xyz/rss.xml",
	};

	const feed = new Feed(feedOptions);

	posts.forEach((post: IArticles) =>
		feed.addItem({
			title: post.attributes.title,
			description: post.attributes.description,
			link: `${url}/blog/article/${post.attributes.slug}`,
			guid: post.attributes.slug,
			published: new Date(post.attributes.publishedAt),
			id: `${url}/blog/article/${post.attributes.slug}`,
			content: remark()
				.use(remarkHtml)
				.processSync(post.attributes.content)
				.toString(),
			copyright: feedOptions.copyright,
			date: new Date(post.attributes.publishedAt),
			author: [
				{
					email: "mauriciobw17@gmail.com",
					name: "Maurício Witter",
					link: "https://twitter.com/rwietter",
				},
			],
		}),
	);

	fs.writeFileSync("./public/rss.xml", feed.rss2());
	fs.writeFileSync("./public/rss.json", feed.json1());
	fs.writeFileSync("./public/rss.atom", feed.atom1());
}

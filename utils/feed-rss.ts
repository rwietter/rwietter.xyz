/* eslint-disable import/no-extraneous-dependencies */
import RSS from 'rss';
import fs from 'fs';
import { type IArticles } from 'features/blog/ts';

export default async function generateRssFeed(posts: any[]): Promise<void> {
  const isProduction = process.env.NODE_ENV === 'production';
  const url = isProduction ? (process.env.SITE_URL || 'https://rwietterc.xyz') : 'http://localhost:3000';

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: url,
    feed_url: `${url}/rss.xml`,
    image_url: `${url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Maurício Witter`,
  };

  const feed = new RSS(feedOptions);

  posts.forEach((post: IArticles) => feed.item({
    title: post.attributes.title,
    description: post.attributes.description,
    url: `${url}/blog/article/${post.attributes.slug}`,
    guid: post.attributes.slug,
    categories: post.attributes.category.data.attributes.name.split(', '),
    date: post.attributes.publishedAt,
  }));

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}

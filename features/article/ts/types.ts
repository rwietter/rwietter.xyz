export interface Name {
	name: string;
}

export interface Data {
	attributes: Name;
}

export interface Author {
	data: Data;
}

export interface Article {
	slug: string;
	name: string;
}

export interface ArticleAttributes {
	attributes: Article;
}

export interface Category {
	data: ArticleAttributes;
}

export interface ImageAttributes {
	url: string;
	name: string;
	caption: string;
	alternativeText: string;
}

export interface TypeImage {
	attributes: ImageAttributes;
}

export interface Image {
	data: TypeImage;
}

export interface Properties {
	slug: string;
	title: string;
	content: string;
	description: string;
	author: Author;
	publishedAt: string;
	updatedAt: string;
	category: Category;
	image: Image;
}

export interface Attributes {
	attributes: Properties;
}

type ImageBlurData = {
	src: string;
	type: string;
	blurDataURL: string;
};

export type ArticleData = {
	articles: Attributes[];
	blurDataURL: ImageBlurData;
};

/* eslint-disable react/destructuring-assignment */
import { ArticleJsonLd } from "next-seo";
import React from "react";

interface JSONLDProps {
	title: string;
	description: string;
	url: string;
	datePublished: string;
	authorName: string;
	image: string;
	isAccessibleForFree?: boolean;
	type?: "Article" | "BlogPosting";
}

const JSONLD: React.FC<JSONLDProps> = (props) => (
	<ArticleJsonLd
		useAppDir={false}
		url={props.url}
		title={props.title}
		images={[props.image]}
		datePublished={props.datePublished}
		authorName={[
			{
				name: props.authorName,
				url: "https://rwietterc.xyz",
			},
		]}
		publisherName={props.authorName}
		description={props.description}
		isAccessibleForFree={props.isAccessibleForFree || true}
		type={props.type || "Article"}
	/>
);

export default JSONLD;

import React from "react";

type NewPostProps = {
	lastArticle: any;
};

const NewPost: React.FC<NewPostProps> = ({ lastArticle }) => (
	<div>{JSON.stringify(lastArticle)}</div>
);

export default NewPost;

import { ArticleCard } from "features/blog/article-card";
import * as S from "./styles";

const BlogPosts = ({ articles }: any) => (
	<S.ArticlesContainer>
		{articles?.map((article: any) => (
			<ArticleCard article={article} key={article.attributes.slug} />
		))}
	</S.ArticlesContainer>
);

export { BlogPosts };

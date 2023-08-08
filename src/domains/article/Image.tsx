import React from 'react';
import { blurImage } from 'utils/blur-image';
import Image from 'next/image';

type Props = {
  article: any;
};

const ArticleImage: React.FC<Props> = async ({ article }) => {
  const blured = await blurImage(
    article?.attributes?.image?.data?.attributes?.url,
  );

  const caption = article.attributes?.image?.data?.attributes?.caption;

  return (
    <div className="w-full">
      <Image
        width={5000}
        height={5000}
        quality={100}
        alt={`Image of the article: ${article.attributes.title} | ${article.attributes.image.data.attributes.alternativeText}`}
        loading="lazy"
        placeholder="blur"
        blurDataURL={blured.blurDataURL}
        src={article?.attributes?.image?.data?.attributes?.url}
        className="w-full h-full object-cover max-h-[30rem]"
      />
      {caption ? (
        <p className="font-fancy p-3 text-center text-gray-400">
          Copyrigth
          {caption}
        </p>
      ) : <span />}
    </div>
  );
};

export default ArticleImage;

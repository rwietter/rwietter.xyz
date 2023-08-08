import Link from 'next/link';
import { blurImage } from 'utils/blur-image';
import Image from 'next/image';

const ArticleCard = async ({ article }: any) => {
  const {
    slug, title, description, category, image,
  } = article.attributes;

  const blured = await blurImage(
    article?.attributes?.image?.data?.attributes?.url,
  );

  return (
    <section className="w-full">
      <Link href={`/blog/${slug}`} passHref>
        {image?.data?.attributes?.url ? (
          <Image
            width={2000}
            height={2000}
            loading="lazy"
            placeholder="blur"
            blurDataURL={blured.blurDataURL}
            src={image?.data?.attributes?.url}
            alt={title}
            className="rounded-lg object-cover w-full h-36"
          />
        ) : (
          <span />
        )}

        <span>
          <p className="font-sans font-bold pt-3 leading-6">{title}</p>
          <h2 className="font-fancy py-3 overflow-hidden truncate w-full">
            {description}
          </h2>
          {category.data?.attributes?.name ? (
            <h3 className="py-0 px-2 font-fancy text-white bg-gray-900 dark:bg-slate-50 dark:text-black rounded-sm w-min transition-colors duration-300">
              #
              {category.data?.attributes?.name}
            </h3>
          ) : (
            <span />
          )}
        </span>
      </Link>
    </section>
  );
};

export { ArticleCard };

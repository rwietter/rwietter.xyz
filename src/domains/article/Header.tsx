import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';

type Props = {
  article: any;
}

const ArticleHeader: React.FC<Props> = ({ article }) => {
  const { readTime } = getReadingTime(article?.attributes?.content);
  const { localeDate: publishedAt } = getLocaleDate(
    article?.attributes?.publishedAt,
    'pt-BR',
  );

  return (
    <div className="m-auto">
      <div>
        <section className="flex items-center justify-between font-fancy">
          <Link href="/blog">
            <button
              type="button"
              aria-label="Back to overview"
              className="flex text-base items-center font-fancy bg-transparent border-none cursor-pointer"
            >
              <AiOutlineArrowLeft
                size={22}
                aria-hidden="true"
                className="mr-3"
              />
              <p>Back to overview</p>
            </button>
          </Link>
          <div>
            <div className="text-gray-600 font-fancy text-base flex items-center space-x-4">
              <div className="flex items-center">
                <AiOutlineCalendar size={19} className="mr-1" />
                <p>{publishedAt}</p>
              </div>
              <div className="flex items-center">
                <RiTimer2Line size={19} className="mr-2" />
                <p>{readTime}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h1 className="text-5xl pt-6 font-sans font-black">
        {article?.attributes?.title}
      </h1>
      <p className="font-fancy text-xl pt-3 pb-5">
        {article?.attributes?.description}
      </p>
    </div>
  );
};

export default ArticleHeader;

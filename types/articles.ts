export interface IArticles {
  attributes: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    category: {
      data: {
        attributes: {
          slug: string;
          name: string;
        },
      },
    },
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    },
    __typename: string
  },
  __typename: string,
  blurDataURL: {
    src: string,
    type: string,
    blurDataURL: string
  }
}

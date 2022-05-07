import { useQuery } from '@apollo/react-hooks';

const Query = ({ children, query, slug }: any) => {
  if (!slug) return false;

  const { data, loading, error } = useQuery(query, {
    variables: { slug },
  });

  if (loading) return null;

  if (error) {
    return false;
  }
  return children({ data });
};

export default Query;

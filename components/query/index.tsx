import { useQuery } from '@apollo/react-hooks';

const Query = ({ children, query, slug }: any) => {
  if (!slug) return false;

  const { data, loading, error } = useQuery(query, {
    variables: { slug },
  });
  console.log(data, loading, error);

  if (loading) return null;

  if (error) {
    console.log(error.message);
    return false;
  }
  return children({ data });
};

export default Query;

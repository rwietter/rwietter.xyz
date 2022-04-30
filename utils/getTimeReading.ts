import useReadingTime from 'reading-time';

export const getReadingTime = (content: string) => {
  const { text } = useReadingTime(content);
  return { readTime: text };
};

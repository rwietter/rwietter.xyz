import { keyframes, styled } from 'styles/theme';
import React from 'react';
import { useRouter } from 'next/router';
import { m } from 'framer-motion';

const Container = styled(m.div, {
  width: 'auto',
  position: 'absolute',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  bottom: 20,
  right: 60,
  background: '$white',
  color: '$gray400',
  minHeight: '3rem',
  maxWidth: '30rem',
  padding: '$2',
  borderRadius: '8px',
});

const animate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const Loader = styled('div', {
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'linear-gradient(#f07e6e, #84cdfa, #5ad1cd)',
  animation: `${animate} 1.2s linear infinite`,

  span: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'linear-gradient(#f07e6e, #84cdfa, #5ad1cd)',
  },

  'span:nth-child(1)': {
    filter: 'blur(5px)',
  },

  'span:nth-child(2)': {
    filter: 'blur(10px)',
  },

  'span:nth-child(3)': {
    filter: 'blur(20px)',
  },

  'span:nth-child(4)': {
    filter: 'blur(40px)',
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px',
    background: '#f1f1f1',
    border: 'solid white 10px',
    borderRadius: '50%',
  },
});

const Path = styled('p', {
  fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
  paddingLeft: '$2',
});

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const Loading: React.FC = () => {
  const router = useRouter();
  return (
    <Container
      layout
      transition={spring}
    >
      <Loader>
        <span />
        <span />
        <span />
        <span />
      </Loader>
      <Path>
        {router.asPath}
      </Path>
    </Container>
  );
};
export { Loading };

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

type NonSSRWrapperProps = {
  children: ReactNode
}

const NonSSRWrapper = ({ children }: NonSSRWrapperProps) => (
  <div>{children}</div>
);

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

import { FC, ReactNode } from 'react';
import { StickyBar } from 'src/shared/StickyBar';
import Header from 'src/shared/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
<<<<<<< HEAD
    <div
      className="flex"
    >
      <Header />
=======
    <Header />
    <div className="flex flex-col m-auto pt-11 px-[3.2rem] bg-white dark:bg-black dark:text-white min-h-screen transition-colors duration-300 ease-in-out w-full max-w-5xl ">
>>>>>>> 145ecd6 (refactor: rsc)
      {children}
    </div>
    <StickyBar />
  </>
);

export { Layout };

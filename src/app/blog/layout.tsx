import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Layout;

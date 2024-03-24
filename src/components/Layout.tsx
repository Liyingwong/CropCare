import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export default Layout;

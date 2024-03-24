import React, {PropsWithChildren} from "react";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="container-fluid">{children}</main>;
}

export default Main;

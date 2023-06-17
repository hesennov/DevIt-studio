// import { HTMLProps } from "react";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={`container mx-auto ${className} px-8 md:px-16 lg:px-8`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

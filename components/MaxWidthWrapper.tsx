import React from "react";

interface Props {
  children: JSX.Element;
}

const MaxWidthWrapper = ({ children }: Props) => {
  return <section className="w-[90%]">{children}</section>;
};

export default MaxWidthWrapper;

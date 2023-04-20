import { LayoutProps } from "@/models";
import React from "react";

export const BlankLayout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <div className="min-h-screen max-w-7xl m-auto">{children}</div>
    </React.Fragment>
  );
};

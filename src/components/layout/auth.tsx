import { useAuth } from "@/hooks";
import { LayoutProps } from "@/models";
import { useRouter } from "next/router";
import React from "react";
import { Loading } from "../loading";

type Props = {};

export const AuthLayout = ({ children }: LayoutProps) => {
  const { push } = useRouter();
  const { profile, fistLoading } = useAuth();
  if (!fistLoading && !profile) push("/dang-nhap");
  return (
    <React.Fragment>
      {fistLoading ? <Loading /> : null}
      <div>{children}</div>
    </React.Fragment>
  );
};

import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axiosConfig from "@/api_client/axios_config";
import { AuthLayout, BlankLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? BlankLayout;
  const Auth = Component.requestAuth ? AuthLayout : React.Fragment;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosConfig.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Auth>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </Auth>
    </SWRConfig>
  );
}

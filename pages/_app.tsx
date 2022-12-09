import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@rest-hooks/ssr/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}

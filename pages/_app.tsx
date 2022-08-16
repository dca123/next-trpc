import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";
import superjson from "superjson";
import { Layout } from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

function getBaseUrl() {
  return `http://localhost:${process.env.PORT || 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      url: `${getBaseUrl()}/api/trpc`,
    };
  },
})(MyApp);

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
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/trpc`
    : "http://localhost:3000/api/trpc";
  return { url };
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      url: `${getBaseUrl()}/api/trpc`,
    };
  },
})(MyApp);

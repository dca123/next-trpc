import type { NextPage } from "next";
import { DocumentsTable } from "../components/DocumentsTable";
import { Navbar } from "../components/Navbar";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const Home: NextPage = () => {
  const { isError, isLoading, isIdle, data } = trpc.useQuery(["documents"]);
  if (isLoading || isError || isIdle) {
    return <div>Loading...</div>;
  }
  return <DocumentsTable data={data} />;
};

export default Home;

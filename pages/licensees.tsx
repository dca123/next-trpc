import { NextPage } from "next";
import { LicenseeTable } from "../components/LicenseeTable";
import { trpc } from "../utils/trpc";

const LicenseePage: NextPage = () => {
  const { data, isLoading, isError, isIdle } = trpc.useQuery(["licensees"]);

  if (isLoading || isError || isIdle) {
    return <div>Loading...</div>;
  }

  return <LicenseeTable data={data} />;
};

export default LicenseePage;

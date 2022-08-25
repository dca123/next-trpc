import { NextPage } from "next";
import Link from "next/link";
import { DocumentsTable } from "../../components/DocumentsTable";
import { trpc } from "../../utils/trpc";

const DocumentsPage: NextPage = () => {
  const { isError, isLoading, isIdle, data } = trpc.useQuery(["documents"]);
  if (isLoading || isError || isIdle) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-5 flex flex-col">
      <div>
        <Link href="/documents/new">
          <button className="btn">New Document</button>
        </Link>
      </div>
      <div className="mt-5">
        <DocumentsTable data={data} />
      </div>
    </div>
  );
};

export default DocumentsPage;

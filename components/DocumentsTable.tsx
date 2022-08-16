import { Document, Status } from "@prisma/client";
import { InferQueryOutput } from "../utils/trpc";

type data = InferQueryOutput<"documents">;

const StatusText = {
  APPROVED: "Approved",
  IN_REVIEW: "In Review",
  PENDING: "Pending",
  REJECTED: "Rejected",
};

export const DocumentsTable = ({ data }: { data: data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Licensee</th>
            <th>Serial</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((document) => (
            <tr key={document.id}>
              <td>{document.licensee.name}</td>
              <td>{document.serial.toISOString().substring(0, 10)}</td>
              <td>{StatusText[document.status]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

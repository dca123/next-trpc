import { Document, Status } from "@prisma/client";
import { InferQueryOutput } from "../utils/trpc";

type data = InferQueryOutput<"licensees">;

export const LicenseeTable = ({ data }: { data: data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Incorporation</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, incorporation, name }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{incorporation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

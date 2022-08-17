import { NextPage } from "next";

const NewDocumentPage: NextPage = () => {
  return (
    <div className="flex flex-col mx-6">
      <h1 className="text-xl py-6">Add Document</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Licensee
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="form-control max-w-fit">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox" checked={true} className="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDocumentPage;

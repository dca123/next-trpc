import { Document, Periodicity } from "@prisma/client";
import { Field, Form, Formik, FormikConfig } from "formik";
import { NextPage } from "next";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { trpc } from "../../utils/trpc";

const initialValues: Pick<Document, "periodicity" | "licenseeId"> = {
  licenseeId: "",
  periodicity: Periodicity.MONTHLY,
};

const NewDocumentPage: NextPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { data } = trpc.useQuery(["licensees"]);

  const mutation = trpc.useMutation("createDocument");
  const onSubmit: FormikConfig<
    Required<typeof initialValues>
  >["onSubmit"] = async (values) => {
    console.log({ ...values, date: startDate });
    mutation.mutate({
      date: startDate,
      licensee: values.licenseeId,
      period: values.periodicity,
    });
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  return (
    <div className="mx-6 flex flex-col">
      <h1 className=" py-6 text-xl">Add Document</h1>
      <div className="card h-[30vh] max-w-fit bg-base-100 shadow-xl">
        <div className="card-body ">
          <div className="flex flex-col">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <div className="form-control">
                  <label htmlFor="licenseeId">Licensee</label>
                  <Field
                    name="licenseeId"
                    as="select"
                    placeholder="Licensee"
                    className="select select-bordered w-full max-w-xs"
                  >
                    {data?.map((licensee) => (
                      <option key={licensee.id} value={licensee.id}>
                        {licensee.name}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="mt-5 flex">
                  <div className="form-control mr-6">
                    <label className="label">
                      <Field
                        type="radio"
                        name="periodicity"
                        value={Periodicity.FORTNIGHTLY}
                        className="radio"
                      />
                      <span className="pl-2">Fortnightly</span>
                    </label>
                  </div>
                  <div className="form-control mr-6">
                    <label className="label">
                      <Field
                        type="radio"
                        name="periodicity"
                        value={Periodicity.MONTHLY}
                        className="radio"
                      />
                      <span className="pl-2">Monthly</span>
                    </label>
                  </div>
                  <div className="form-control mr-6">
                    <label className="label">
                      <Field
                        type="radio"
                        name="periodicity"
                        value={Periodicity.QUARTERLY}
                        className="radio"
                      />
                      <span className="pl-2">Quarterly</span>
                    </label>
                  </div>
                  <div className="form-control mr-6">
                    <label className="label">
                      <Field
                        type="radio"
                        name="periodicity"
                        value={Periodicity.WEEKLY}
                        className="radio"
                      />
                      <span className="pl-2">Weekly</span>
                    </label>
                  </div>
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <div className="btn btn-primary mt-5">
                  <button type="submit"> Add Document</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDocumentPage;

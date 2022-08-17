import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">DocuManage</h1>
          <p className="py-6">
            Welcome to DocuManage, a document management system for all of your
            legal needs.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

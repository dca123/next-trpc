export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">DocuManage</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          <li className="font-bold">
            <a>Documents</a>
          </li>
          <li className="font-">
            <a>Users</a>
          </li>
          <li className="font-">
            <a>Licensees</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
      </div>
    </div>
  );
};

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">DocuManage</a>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          <li className="font-bold">
            <Link href="/documents">Documents</Link>
          </li>
          <li className="font-">
            <Link href="/users">Users</Link>
          </li>
          <li className="font-">
            <Link href="/licensees">Licensees</Link>
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

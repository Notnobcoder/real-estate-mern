import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-pink-800">
      <div className="container justify-between mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h4 className="font-bold text-2xl text-white">Estate.com</h4>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/sign-in">
            </Link>
            <Link to="/add-hotel">add hotel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="text-center">
      <p>Page not found</p>
      <Link to="/">
        <button className="border-2 border-gray-400 rounded-xl py-1 px-4 my-2">
          Go to front page
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;

import { Link } from "react-router";

function BusinessList() {
  const businesses = [
    "Hair Art",
    "Beauty and Hair",
    "Hair by Minna",
    "Brush & Scissors"
  ];
  return (
    <div className="flex items-center gap-4 md:mr-30">
      <div className="m-2">
        <Link to="/">
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
      </div>
      <div className="m-2">
        <h1 className="text-gray-700">Hair salons</h1>
        {businesses.map((b) => (
          <Link to="business" key={b}>
            <div className="border-2 border-gray-400 p-4 m-1 rounded-2xl">{b}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;

import { Link } from "react-router";

function ServiceList() {
  const categories = ["Haircut & dyeing", "Permanent", "Other treatments"];
  const services = [
    "Haircut (long hair): 45€",
    "Haircut (short hair): 20€",
    "Haircut & dyeing (long hair): 70€",
    "Haircut & dyeing (short hair): 50€"
  ];
  return (
    <div className="flex items-center gap-4 mr-30">
      <div className="m-2">
        <Link to="/hair">
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
      <div>
        <h2>Services</h2>
        <div className="flex m-auto gap-1">
          {categories.map((c) => (
            <div className="border-2 border-gray-300 p-2.5 rounded-lg">{c}</div>
          ))}
        </div>
        <div className="border-2 border-gray-300 my-2 rounded-lg">
          {services.map((service, i) => (
            <div
              key={service}
              className={`text-left p-2 ${i !== services.length - 1 && `border-gray-300 border-b-2`}`}
            >
              {service}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className="p-1 rounded-xl"
            style={{ padding: "4px", borderRadius: "10px", fontSize: "16px" }}
          >
            Go to booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;

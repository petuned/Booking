import { Link } from "react-router";

interface Props {
  serviceTypes: Array<string>;
}

function ServiceTypes({ serviceTypes }: Props) {
  return (
    <div className="md:grid md:grid-cols-2 w-1/2">
      {serviceTypes.map((s) => (
        <Link to="/hair" key={s}>
          <div className="border-2 border-gray-400 rounded-xl min-w-fit m-2 md:m-1 p-4 text-center">
            {s}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceTypes;

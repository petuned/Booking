import { Link } from "react-router";

interface Props {
  serviceTypes: Array<string>;
}

function ServiceTypes({ serviceTypes }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 w-1/2">
      {serviceTypes.map((s) => (
        <Link to="/hair" key={s}>
          <div className="border-2 rounded-xl p-4 text-center">{s}</div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceTypes;

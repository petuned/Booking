import { Link } from "react-router";

interface ServiceType {
  type: string;
}
interface Props {
  serviceTypes: Array<ServiceType>;
}

function ServiceTypeList({ serviceTypes }: Props) {
  const serviceCategories = [
    { type: "Hair Salon", title: "Hair" },
    { type: "Beauty Salon", title: "Beauty" },
    { type: "Massage Salon", title: "Massage" },
    { type: "Spa", title: "Spa" }
  ];
  const filteredCategories = serviceCategories.filter((category) =>
    serviceTypes.some((service) => service.type === category.type)
  );

  return (
    <div className="md:grid md:grid-cols-2 w-1/2">
      {filteredCategories.map((fc) => (
        <Link to={`${fc.type}`} key={fc.type}>
          <div className="border-2 border-gray-400 rounded-xl min-w-fit m-2 md:m-1 p-4 text-center">
            {fc.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceTypeList;

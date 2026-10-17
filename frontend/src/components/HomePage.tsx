import ServiceTypes from "./ServiceTypes";

interface Props {
  serviceTypes: Array<string>;
}

function HomePage({ serviceTypes }: Props) {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h1>Browse and book an appointment</h1>
      <h2>Services</h2>
      <ServiceTypes serviceTypes={serviceTypes} />
    </div>
  );
}

export default HomePage;

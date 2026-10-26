import ServiceTypeList from "./ServiceTypeList";
interface ServiceType {
  type: string;
}
interface Props {
  serviceTypes: Array<ServiceType>;
}

function HomePage({ serviceTypes }: Props) {
  return (
    <div className="flex flex-col gap-4 text-center justify-center items-center">
      <h1>Browse and book an appointment</h1>
      <h2>Services</h2>
      <ServiceTypeList serviceTypes={serviceTypes} />
    </div>
  );
}

export default HomePage;

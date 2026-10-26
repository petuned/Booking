import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import businessService from "../services/businessService";
import BackButton from "./BackButton";

interface Service {
  service_id: string;
  business_id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
}

interface Info {
  name: string;
  description: string;
}

function ServiceList() {
  const [businessInfo, setBusinessInfo] = useState<Info | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const businessType = useParams().businesstype;
  const businessId = useParams().business;

  useEffect(() => {
    if (businessId) {
      businessService
        .getBusinessInfo(businessId)
        .then((info) => setBusinessInfo(info))
        .catch((e) => console.log(e));
      businessService
        .getServicesByBusiness(businessId)
        .then((services: Service[]) => {
          setServices(services);
          const categoriesNames: string[] = [
            ...new Set(services.map((service: Service) => service.category))
          ];
          setCategories(categoriesNames);
          setSelectedCategory(categoriesNames[0]);
        })
        .catch((e) => console.log(e));
    }
  }, [businessId, setServices]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-4">
        <h2>{businessInfo?.name}</h2>
        <p>{businessInfo?.description}</p>
      </div>
      <div className="flex items-center gap-4 mt-2 mb-4 md:mr-30">
        <div className="m-2">
          <Link to={`/business/${businessType}`}>
            <BackButton />
          </Link>
        </div>
        <div>
          <h2>Services</h2>
          <div className="flex flex-wrap m-auto gap-1">
            {categories.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectedCategory(c)}
                className="border-2 border-gray-400 p-2.5 rounded-lg"
              >
                {c}
              </div>
            ))}
          </div>
          <div className="border-2 border-gray-400 my-2 rounded-lg">
            {services.map(
              (service, i) =>
                service.category == selectedCategory && (
                  <div
                    key={i}
                    className="flex justify-between gap-2 p-2 border-gray-300 border-b-2"
                  >
                    <p>
                      {service.name} ({service.duration} min)
                    </p>
                    <p>{service.price} €</p>
                  </div>
                )
            )}
          </div>
          <div className="text-center">
            <button className="border-2 border-gray-400 rounded-xl py-1 px-4 mb-4">
              Go to booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;

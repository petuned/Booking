import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import businessService from "../services/businessService";
import BackButton from "./BackButton";

interface Business {
  business_id: string;
  name: string;
  type: string;
  description: string;
}

const headings = [
  { type: "Hair Salon", title: "Hair Salons" },
  { type: "Beauty Salon", title: "Beauty Salons" },
  { type: "Massage Salon", title: "Massage Salons" },
  { type: "Spa", title: "Spas" }
];

function BusinessList() {
  const [businesses, setBusinesses] = useState<Array<Business>>([]);
  const businessType = useParams().businesstype;
  const heading = headings.find((item) => item.type === businessType);

  useEffect(() => {
    if (businessType) {
      businessService
        .getBusinessesByType(businessType)
        .then((businesses) => {
          setBusinesses(businesses);
        })
        .catch((e) => console.log(e));
    }
  }, [businessType]);

  if (!businessType) return null;

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="m-2">
        <Link to="/">
          <BackButton />
        </Link>
      </div>
      <div className="m-2 md:min-w-48 text-center">
        <h1 className="text-gray-700">{heading?.title ?? "Businesses"}</h1>
        <div>
          {businesses.map((b) => (
            <Link to={`${b.business_id}`} key={b.name}>
              <div className="border-2 border-gray-400 p-4 m-1 rounded-2xl">
                {b.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessList;

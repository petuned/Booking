export interface User {
  name: string;
  type: "Customer" | "Business";
}

export interface ServiceType {
  type: string;
}

export interface Service {
  service_id: string;
  business_id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
}

export interface Info {
  name: string;
  description: string;
}

export interface Business {
  business_id: string;
  name: string;
  type: string;
  description: string;
}

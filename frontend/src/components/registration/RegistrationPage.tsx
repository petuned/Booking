import { useState } from "react";
import RegisterForm from "./RegisterForm";

function RegistrationPage() {
  const [registryType, setRegistryType] = useState<"business" | "customer" | null>(
    null
  );
  return (
    <div>
      {!registryType ? (
        <div className="flex gap-2">
          <div
            onClick={() => setRegistryType("business")}
            className="border-2 rounded-xl p-4 text-center"
          >
            Register your business
          </div>
          <div
            onClick={() => setRegistryType("customer")}
            className="border-2 rounded-xl p-4 text-center"
          >
            Register as customer
          </div>
        </div>
      ) : (
        <RegisterForm client={registryType} />
      )}
    </div>
  );
}

export default RegistrationPage;

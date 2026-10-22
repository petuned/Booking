import type { Dispatch, SetStateAction } from "react";
import type { User } from "../../App";
import { Link } from "react-router";

interface Props {
  loginUser: Dispatch<SetStateAction<User | null>>;
}

function LoginPage({ loginUser }: Props) {
  // Users for testing different UIs
  const customer: User = {
    name: "Eve",
    type: "Customer"
  };
  const business: User = {
    name: "Hair Art",
    type: "Business"
  };
  return (
    <div>
      <h1>Login as client or business</h1>
      {/** For quick UI testing, will be removed later & implemented similarly to registration */}
      <button
        onClick={() => loginUser(customer)}
        className="border-2 rounded-xl py-1 px-4"
      >
        Login as customer
      </button>
      <button
        onClick={() => loginUser(business)}
        className="border-2 rounded-xl py-1 px-4"
      >
        Login as business
      </button>
      <Link to="/loginform">Go to login form</Link>
    </div>
  );
}

export default LoginPage;

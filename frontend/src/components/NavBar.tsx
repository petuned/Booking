import { useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router";
import type { User, ServiceType } from "../types";
import { serviceCategories } from "../utils";

interface Props {
  user: User | null;
  logout: Dispatch<SetStateAction<User | null>>;
  serviceTypes: Array<ServiceType>;
}

function NavBar({ user, logout, serviceTypes }: Props) {
  const [hidden, setHidden] = useState("hidden");

  const filteredCategories = serviceCategories.filter((category) =>
    serviceTypes.some((service) => service.type === category.type)
  );

  if (user && user.type === "Business")
    return (
      <nav className="flex-none flex justify-between items-center px-3 py-1">
        <div className="flex gap-4">
          <Link to="/">Dashboard</Link>
          <p>Services</p>
          <p>Employees</p>
          <p>Settings</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>{user.name}</p>
          <button
            onClick={() => logout(null)}
            className="border-2 border-gray-400 rounded-xl py-1 px-4"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  return (
    <nav className="flex-none flex justify-between items-center px-3 py-1">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <div
          onMouseEnter={() => setHidden("")}
          onMouseLeave={() => setHidden("hidden")}
        >
          <p>Services</p>
          <div className={`${hidden} z-50 absolute bg-white p-2`}>
            {filteredCategories.map((service) => (
              <Link to={`/business/${service.type}`} key={service.type}>
                <div>{service.title}</div>
              </Link>
            ))}
          </div>
        </div>
        {user && user.type === "Customer" && (
          <>
            <p>My appointments</p>
            <p>My profile</p>
          </>
        )}
      </div>
      {user ? (
        <div className="flex gap-2 items-center">
          <p>Hello {user.name}</p>
          <button
            onClick={() => logout(null)}
            className="border-2 border-gray-400 rounded-xl py-1 px-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <header className="flex gap-2">
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button className="border-2 border-gray-400 rounded-xl py-1 px-4">
            <Link to="/login">Login</Link>
          </button>
        </header>
      )}
    </nav>
  );
}

export default NavBar;

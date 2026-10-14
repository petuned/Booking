import { useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router";
import type { User } from "../App";

interface Props {
  user: User | null;
  logout: Dispatch<SetStateAction<User | null>>;
}

function NavBar({ user, logout }: Props) {
  const [hidden, setHidden] = useState("hidden");
  const services = ["Hair", "Spa", "Massage", "Beauty"];

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
            className="border-2 rounded-xl py-1 px-4"
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
            {services.map((s) => (
              <Link to="/hair" id={s}>
                <div>{s}</div>
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
            className="border-2 rounded-xl py-1 px-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <header className="flex gap-2">
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button className="border-2 rounded-xl py-1 px-4">
            <Link to="/login">Login</Link>
          </button>
        </header>
      )}
    </nav>
  );
}

export default NavBar;

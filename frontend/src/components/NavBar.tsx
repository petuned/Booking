import { useState } from "react";
import { Link } from "react-router";

function NavBar() {
  const [hidden, setHidden] = useState("hidden");
  const services = ["Hair", "Spa", "Massage", "Beauty"];
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
              <Link to="/hair">
                <div>{s}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <header className="flex gap-2">
        <button>Register</button>
        <button className="border-2 rounded-xl py-1 px-4">Login</button>
      </header>
    </nav>
  );
}

export default NavBar;

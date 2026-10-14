import type { SyntheticEvent } from "react";

interface Props {
  client: "customer" | "business";
}

function RegisterForm({ client }: Props) {
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  if (client === "business") {
    return (
      <form onSubmit={handleLogin} className="text-center pb-4">
        <h1>Register</h1>
        <div className="flex flex-col gap-2 m-4 p-6 text-left">
          <label>
            Business title
            <input type="text" className="border-2 rounded-lg w-full p-2"></input>
          </label>
          <label>
            Business type
            <input type="text" className="border-2 rounded-lg w-full p-2"></input>
          </label>
          <label>
            Email
            <input type="email" className="border-2 rounded-lg w-full p-2"></input>
          </label>
          <label>
            Password
            <input
              type="password"
              className="border-2 rounded-lg w-full p-2"
            ></input>
          </label>
          <label>
            Confirm password
            <input
              type="password"
              className="border-2 rounded-lg w-full p-2"
            ></input>
          </label>
        </div>
        <button type="submit" className="border-2 rounded-xl py-1 px-4">
          Register
        </button>
      </form>
    );
  }
  return (
    <form onSubmit={handleLogin} className="text-center pb-4">
      <h1>Register</h1>
      <div className="flex flex-col gap-2 m-4 p-6 text-left">
        <label>
          Email
          <input type="email" className="border-2 rounded-lg w-full p-2"></input>
        </label>
        <label>
          Password
          <input type="password" className="border-2 rounded-lg w-full p-2"></input>
        </label>
        <label>
          Confirm password
          <input type="password" className="border-2 rounded-lg w-full p-2"></input>
        </label>
      </div>
      <button type="submit" className="border-2 rounded-xl py-1 px-4">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

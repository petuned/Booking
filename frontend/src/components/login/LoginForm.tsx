import type { SyntheticEvent } from "react";

function LoginForm() {
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form onSubmit={handleLogin} className="text-center pb-4">
      <h1>Login</h1>
      <div className="flex flex-col gap-2 m-4 p-6 text-left">
        <label>
          Email
          <input type="email" className="border-2 rounded-lg w-full p-2"></input>
        </label>
        <label>
          Password
          <input type="password" className="border-2 rounded-lg w-full p-2"></input>
        </label>
      </div>
      <button type="submit" className="border-2 rounded-xl py-1 px-4">
        Login
      </button>
    </form>
  );
}

export default LoginForm;

import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import BirdAnimation from "../Animations/BirdAnimation";
import PrimaryButton from "../components/PrimaryButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmit = () => {
    const credentials = {
      email: email,
      password: password,
    };
    login(credentials);
  };

  return (
    <div className="font-sans bg-emerald-200 text-gray-900 antialiased">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div
          className="-mb-16 -mt-40"
          style={{ width: "400px", height: "400px" }}
        >
          <BirdAnimation />
        </div>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-400 shadow-md overflow-hidden sm:rounded-2xl">
          <form onSubmit={handleSubmit}>
            <label className="block font-medium text-mg text-gray-700">
              Email
            </label>
            <input
              className="w-full p-2 border-gray-400 bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <label className="block font-medium text-mg text-gray-700">
              Password
            </label>
            <input
              className="w-full p-2 border-gray-400 bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-end mt-4 justify-between">
              <a
                className="underline text-sm text-gray-100 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                href="/register"
              >
                新規登録
              </a>
              <PrimaryButton>Log in</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

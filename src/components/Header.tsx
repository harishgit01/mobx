import counterStore from "@/stores/CounterStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

const Header: React.FC = observer(() => {
    // Ensure the state is loaded after the component mounts
    useEffect(() => {
        counterStore.loadState();
    }, []);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Logo</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="/todo" className="text-gray-600 hover:text-gray-800">
            To Do
          </a>
          <p className="text-black">Counter: {counterStore.count}</p>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;

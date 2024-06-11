import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "@/stores/CounterStore";
import Header from "@/components/Header";

const App: React.FC = observer(() => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Counter: {counterStore.count}
        </h1>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => counterStore.decrement()}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => counterStore.increment()}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            onClick={() => counterStore.reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
});

export default App;

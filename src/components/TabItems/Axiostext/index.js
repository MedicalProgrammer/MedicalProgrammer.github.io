import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Perform operation and then set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className={` ${
            loading ? "cursor-not-allowed opacity-25" : ""
          }`}
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            
<div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>

          ) : (
            "Loading Button"
          )}
        </button>
      </div>
    </>
  );
}
import { useState } from "react";
import LocationModal from "../components/LocationModal";

export default function Home() {
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
        <div className="text-center">
      <h1 className="text-6xl font-extrabold text-blue-200">
        <span className=" text-blue-400">Weather</span> Reading
      </h1>
      <p className="py-4 text-md text-gray-500">Check Your Weather Today</p>

      <div>
        <button
          type="button"
          onClick={() => setIsClick(true)}
          className="text-lg font-medium bg-blue-500 px-5 py-2 rounded-3xl hover:scale-105 transition-all delay-100 text-gray-100 cursor-pointer"
        >
          Check Weather
        </button>
      </div>
    </div>
      {isClick && <LocationModal setIsClick={setIsClick}/>}
    </div>
  );
}

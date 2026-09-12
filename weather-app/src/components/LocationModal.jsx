import { X } from "lucide-react";
import { useState } from "react";
export default function LocationModal({ setIsClick }) {
  const [city, setCity] = useState("");
  const [click, setClick] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGeoLocation = () => {
    setClick(true);
    setIsLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (positions) => {
         
        const { latitude, longitude } = positions.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
      { timeout: 10000 },
    );
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-95 w-md bg-gray-100 shadow-2xl m-5 rounded-2xl ">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-xl font-medium ">Where Are You Today ?</h2>
          <button className="cursor-pointer" onClick={() => setIsClick(false)}>
            <X />
          </button>
        </div>
        <div className="p-5">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter City Name"
              className="w-full border p-1 rounded-2xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-full text-lg font-medium bg-blue-500 px-5 py-2 rounded-3xl hover:scale-105 transition-all delay-100 text-gray-100 cursor-pointer"
              >
                Get Weather
              </button>
            </div>
          </form>
          <div className="p-2 text-center">Or</div>
          <div className="flex justify-center">
            <button
              type="button"
              className="w-full text-lg font-medium bg-blue-500 px-5 py-2 rounded-3xl hover:scale-105 transition-all delay-100 text-gray-100 cursor-pointer"
              onClick={handleGeoLocation}
            >
              {isLoading ? "Loading..." : "Use My Location"}
            </button>
          </div>
          {click && (
            <div>
              {error ? (
                <div>
                  <h3 className="text-2xl text-center p-2">{error}</h3>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl text-center p-2">
                    Latitude: {latitude}
                  </h3>
                  <h3 className="text-2xl text-center p-2">
                    Longitude: {longitude}
                  </h3>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

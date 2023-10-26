import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center w-full space-y-5">
        <h3 className="text-[#FF3811] text-center text-xl font-bold">Sevice</h3>
        <h2 className="text-black dark:text-zinc-100  text-center text-5xl font-bold">
          Our Service Area
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-300 w-1/2 mx-auto">
          {`the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable. `}
        </p>
      </div>
      <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services &&
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
      <div className="text-center my-12">
        <button className="px-6 py-4 text-[#FF3811] border-2 rounded-md font-semibold border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;

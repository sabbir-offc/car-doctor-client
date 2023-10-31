import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const params = useParams();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/services/${params?.id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosSecure, params]);
  const { _id, img, title } = service;
  return (
    <div>
      <div className=" h-60 relative">
        <div className="relative w-full">
          <img
            src="/images/banner/4.jpg"
            className="h-60 w-full object-cover rounded-xl "
          />
          <div className="absolute bg-gradient-to-r from-[#222222] to-[rgba(21,21,21,0.00)]  gap-5 transform -translate-y-1/2 h-full w-full flex items-center  top-1/2">
            <div className="text-white ml-8 md:ml-24 space-y-7 w-full ">
              <h2 className="text-3xl md:text-5xl font-bold">
                Service Details
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center h-fit mx-auto px-10 w-full text-center border-r-[25px] border-b-[50px] border-l-[25px] border-solid border-r-transparent border-l-transparent border-b-[#FF3811]">
          <h2 className="font-bold text-white text-center absolute -bottom-9">
            Service Details
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 my-28">
        <div className="col-span-2 space-y-11">
          <img src={img} alt="" className="rounded" />
          <h2 className="text-4xl font-bold text-black dark:text-white">
            {title}
          </h2>
        </div>
        <div>
          <h1>Services</h1>
          <Link to={`/checkout/${_id}`}>
            <button className="w-full bg-[#FF3811] py-4 text-white font-medium">
              Process Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

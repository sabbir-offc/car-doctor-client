import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <section>
      <div className="mx-auto flex  flex-col p-6 border dark:border-0 justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-gray-400/20">
        <img
          className=" rounded-2xl aspect-video  mx-auto object-center"
          src={img}
        />
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-[#444444] dark:text-gray-100  pb-2">
            {title}
          </h1>
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-[#FF3811] leading-6">
              Price: ${price}
            </p>
            <Link to={`/service/${_id}`}>
              <button className="text-[#FF3811] text-2xl">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;

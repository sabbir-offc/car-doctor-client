const Feature = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="font-bold text-[#FF3811]">Core Features</h2>
          <h2 className="font-bold text-black dark:text-gray-100 my-5 text-3xl md:text-5xl">
            Why Choose Us
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-200 md:text-lg">
            {`The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/group.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">Expert Team</h6>
          </div>
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/Group 38729.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">Timely Delivery</h6>
          </div>
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/person.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">24/7 Support</h6>
          </div>
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/Wrench.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">Best Equipment</h6>
          </div>
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/check.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">100% Guranty</h6>
          </div>
          <div className="text-center rounded-md p-7 border duration-500 ease-in-out hover:duration-700 hover:bg-[#ff3911ad] dark:hover:bg[#FF3811] text-black hover:text-white">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-400 sm:w-24 sm:h-24">
              <img src="/icons/deliveryt.svg" alt="" className="" />
            </div>
            <h6 className="mb-2 font-bold dark:text-white">Timely Delivery</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

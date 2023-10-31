import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckOut = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/services/${params.id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosSecure, params]);
  const { _id, price, title, img } = service;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = user?.email;
    const message = form.message.value;

    const order = {
      customerName: name,
      email,
      date,
      phone,
      message,
      service_name: title,
      image: img,
      service_id: _id,
      price,
    };
    axios.post("http://localhost:5000/bookings", order).then((data) => {
      if (data.data.insertedId) {
        toast.success("Order Placed Successfully.");
      }
    });
  };
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                defaultValue={user?.displayName}
                name="name"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="date"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                required
                name="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-zinc-200 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                required
                name="phone"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                defaultValue={user?.email}
                name="email"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-full">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                name="message"
                className="textarea block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#FF3811] rounded-md hover:bg-[#ff7011] focus:outline-none focus:bg-gray-600"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;

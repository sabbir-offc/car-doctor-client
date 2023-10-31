const BookedRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, image, status, customerName, service_name, price, date } =
    booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-28 rounded-l-md">
              {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white ">
              {service_name}
            </h2>
            <h3 className="text-sm opacity-60 text-black dark:text-white">
              {customerName}
            </h3>
          </div>
        </div>
      </td>
      <td className="text-black dark:text-white">${price}</td>
      <td className="text-black dark:text-white">{date}</td>
      <th>
        {status === "Confirm" ? (
          <button className=" text-green-600  border border-green-600 px-3 py-2">
            Approved
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-sm text-black dark:text-white"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookedRow;

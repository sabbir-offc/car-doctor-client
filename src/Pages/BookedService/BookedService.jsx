import BookedRow from "./BookedRow";
import axios from "axios";
import Swal from "sweetalert2";
// import useBooking from "./useBooking";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const BookedService = () => {
  // const { refetch, bookings } = useBooking();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user?.email}`).then((res) => {
      setBookings(res.data);
    });
  }, [axiosSecure, user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/bookings/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            // refetch();
          }
        });
      }
    });
  };

  const handleConfirm = (id) => {
    const updateData = {
      status: "Confirm",
    };

    axios
      .patch(`http://localhost:5000/bookings/${id}`, updateData)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire("Updated", "Your order confirmed successfully.", "success");
          // refetch();
        }
      })
      .catch((error) => {
        console.error("Error confirming order:", error);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-black dark:text-white">Name</th>
              <th className="text-black dark:text-white">Price</th>
              <th className="text-black dark:text-white">Date</th>
              <th className="text-black dark:text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking) => (
                <BookedRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirm={handleConfirm}
                ></BookedRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedService;

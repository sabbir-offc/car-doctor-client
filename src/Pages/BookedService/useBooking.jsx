import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const useBooking = () => {
  const { user } = useAuth();
  const {
    data: bookings,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    enabled: !!user?.email,
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/bookings?email=${user.email}`,
        {
          credentials: "include",
        }
      );
      return await data.json();
    },
  });
  return { bookings, isPending, isError, refetch };
};

export default useBooking;

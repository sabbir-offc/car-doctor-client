import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  console.log(all);
  return all;
};

export default useAuth;

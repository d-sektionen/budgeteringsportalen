import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
};

export default useAuthContext;

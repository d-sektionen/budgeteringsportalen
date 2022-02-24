import { useState, useEffect } from "react";
import { retrieveLiuid } from "../utility/user";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const { dispatch } = useAuthContext();

  const login = async (access) => {
    setError(undefined);
    setIsPending(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const access = urlParams.get("access");

      if (access != null) {
        window.localStorage.setItem("token", access);
        window.history.replaceState({}, document.title, "/");

        const user = await retrieveLiuid();
        console.log(user)
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      } else if (
        window.localStorage.getItem("token") !== "null" ||
        window.localStorage.getItem("token") != null
      ) {
        const user = await retrieveLiuid();
        dispatch({
          type: "LOGIN",
          payload: !user?.liuid ? undefined : user,
        });
      }

      if (!isCancelled) {
        setIsPending(false);
        setError(undefined);
      }
    } catch (error) {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { login, isPending, error };
};

export default useLogin;

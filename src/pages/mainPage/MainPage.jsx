import { useEffect } from 'react'
import Login from "../../components/login/Login.jsx";
import useLogin from "../../hooks/useLogin.js";
import useAuthContext from "../../hooks/useAuthContext"
import ExpenseForm from "../../components/expenseForm/ExpenseForm.jsx";

import "./mainpage.scss";

const MainPage=()=> {
  const { login } = useLogin()
  const { user, authFinished } = useAuthContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const access = urlParams.get("access");
    if (!user) {
      login(access)
    }
  }, []);

  console.log(user)


  return (
      <div id="mainPage">
        {!user && (<Login />)}
        {user && (
          <ExpenseForm/>
        )}
      </div>
  );
}

export default MainPage;

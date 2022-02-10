import { useEffect } from 'react'
import Login from "../../components/login/Login.jsx";
import useLogin from "../../hooks/useLogin.js";
import useAuthContext from "../../hooks/useAuthContext"
import ExpenseForm from "../../components/expenseForm/ExpenseForm.jsx";

import "./mainpage.scss";

function MainPage() {
  const { login } = useLogin()
  const { user, authFinished } = useAuthContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const access = urlParams.get("access");
    if (!user) {
      login(access)
    }
  }, []);

  const onClickSubmit = async () => {
    console.log("clicked submit");
    /*
    const response = await fetch("http://localhost:8000" + '/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: "text" })
    })
    console.log(response.status)
    */
  };

  return (
      <div id="mainPage">
        {!user && (<Login />)}
        {user && (
          <ExpenseForm onClickSubmit={onClickSubmit} />
        )}
      </div>
  );
}

export default MainPage;

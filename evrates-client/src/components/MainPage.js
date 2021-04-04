import React from "react";
import UserForm from "./UserForm";

const MainPage = () => {
  return (
    <div className='main-page'>
      <header> </header>
      <div className='main-banner-content'>
        <h1 className='main-message'>Will Your EV Impact Your Electric Bill</h1>
        <UserForm/>
      </div>
    </div>
  );
};
export default MainPage;

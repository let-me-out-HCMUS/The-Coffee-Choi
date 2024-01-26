import React, { useEffect } from "react";
import LoginImage from "../assets/login-image.png";
import Login from "../features/Auth/Login";
import Register from "../features/Auth/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <section className="bg-orange-50">
      <div className="container mx-auto h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 hidden md:block md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={LoginImage} className="w-full" alt="login image" />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            {isLogin ? (
              <Login setIsLogin={setIsLogin} />
            ) : (
              <Register setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;

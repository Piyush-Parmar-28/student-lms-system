import React from "react";
import Alert from "../components/alert.tsx";

const loginFirst = () => {
  return (
    <main className="page contact-us-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            <Alert color="warning" msg="Login/SignUp to continue!" />
          </div>

        </div>
      </section>
    </main>
  );
};

export default loginFirst;

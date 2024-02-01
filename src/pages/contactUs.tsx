import React, { useState } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    sub: "",
    email: "",
    msg: "",
  });

  const [status, setStatus] = useState(0);

  const handleInput = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const sendData = async (event: any) => {
    event.preventDefault();

    const { name, sub, email, msg } = contactInfo;

    const res = await fetch(
      "https://formsubmit.co/235c884b3f021fafe2a38013d9c14838",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          sub,
          email,
          msg,
        }),
      }
    );

    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <div>
      <Navbar />

      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Contact Us</h2>
              <p>Reach out to me in case of any queries.</p>
            </div>

            {/* <!-- Hiding my email adderss with: 235......838 --> */}
            <form>
              {/* <!-- Disabling the captcha --> */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="subject">
                  <b>Subject</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="subject"
                  name="sub"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  <b>Message</b>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="msg"
                  onChange={handleInput}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={sendData}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";

const MailSent = () => {
  return (
    <main className="page contact-us-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            <div className="alert alert-success" role="alert">
              Mail Sent Successfully!
            </div>

            <h2 className="text-info">Contact Us</h2>
            <p>Reach out to me in case of any queries.</p>
          </div>

          {/* <!-- Hiding my email adderss with: 235......838 --> */}
          <form
            action="https://formsubmit.co/235c884b3f021fafe2a38013d9c14838 "
            method="POST"
          >
            {/* <!-- Redirecting the form to another page after submisssion --> */}
            <input
              type="hidden"
              name="_next"
              value="https://piyush-smanager.herokuapp.com/mailSent"
            />
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
                required
              />
            </div>
            htmlF
            <div className="mb-3">
              <label className="form-label" htmlFor="subject">
                <b>Subject</b>
              </label>
              <input
                className="form-control"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            htmlF
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            htmlF
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                <b>Message</b>
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            htmlF
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MailSent;

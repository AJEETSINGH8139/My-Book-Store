import React, { useRef } from "react";
import "./footer.styles.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const serviceId = "service_uwkyyfv";
  const templateId = "template_sj961yp";
  const publicKey = "xolJZQBdj0aJgY58S";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>
    <section className="footer-container">
      <div className="about">
        <h1 className="margin-text">About Us ...</h1>
        <h5 className="detail-para">
          MyBookStore is a web application that allows users to browse,
          purchase, and read books digitally. It offers features such as a
          comprehensive book catalog, search functionality, personalized
          recommendations, secure checkout, and social interaction to enhance
          the reading experience for users on their smartphones or tablets.
        </h5>
        <h2 className="margin-text">Developed By: -</h2>
        <h4>Ajeet Singh</h4>
        <h5>B.Tech (CSE)</h5>
      </div>
      <div className="containerf">
        <h2>If you have any questions, please post them here.</h2>

        <form onSubmit={handleSubmit} ref={form} className="footer-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="form-input"
              placeholder="Enter your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="query" className="form-label">
              Query:
            </label>
            <textarea
              className="form-input"
              name="message"
              id="query"
              placeholder="Type your Query"
            ></textarea>
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="form-submit" />
          </div>
        </form>

        
      </div>
      
    </section>
    <div className="copyright">
    <p>&copy; 2023 MyBookStore. All Rights Reserved.</p>
    </div>
    
    </>
  );
};

export default Footer;

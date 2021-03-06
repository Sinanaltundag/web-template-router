import React from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";

const Services = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // form veri alma yöntem 1
    const data = new FormData(e.currentTarget);
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }
      // form veri alma yöntem 2
    const { name, email, message } = e.target.elements;
    console.log({ username: name.value, email: email.value, message: message.value });


    const sendedMsg={ name: name.value, email: email.value, message: message.value };
    navigate("/sended", {state:{sendedMsg}})
  };

  return (
    <main>
      <Subscribe/>
      <section className="section-middle light">
        <div className="left">
          <h3>Services</h3>
          <div className="section-about__left--opt">
            <h3>Website Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              voluptate.
            </p>
            <p>Pricing: $1000 - $3000</p>
          </div>
          <div className="section-about__left--opt">
            <h3>Website Maintenance</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              voluptate. Lorem ipsum dolor sit amet.
            </p>
            <p>Pricing: $250 per month</p>
          </div>
          <div className="section-about__left--opt">
            <h3>Website Hosting</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              voluptate.
            </p>
            <p>Pricing: $25 per month</p>
          </div>
        </div>
        <div className="right">
          <div className="about--inner dark">
            <form onSubmit={handleSubmit}>
              <h3>Get A Quote</h3>
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" id="name" name="name" placeholder="Name" required/>
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input type="text" id="email" name="email" placeholder="Email" required/>
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                placeholder="Message"
              ></textarea>
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMobile } from "react-icons/fa";
import axios from "axios";
import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/contact",
        formData
      );
      alert(response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error sending the message!", error);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="details-container">
          <p className="details-subheading">LET'S TALK</p>
          <h1 className="details-mainheading">Speak With Expert Engineer.</h1>
          <div>
            <div className="icon-details">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div>
                <p>Email:</p>
                <p>info@opamtech.co.in</p>
              </div>
            </div>
            <div className="icon-details">
              <div className="icon">
                <FaMobile />
              </div>
              <div>
                <p>Phone:</p>
                <p>+91 9004504998</p>
              </div>
            </div>
            <div className="icon-details">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>Address:</p>
                <p>Prayagraj, UP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <p className="form-heading">GET IN TOUCH</p>
          <h2>Fill The Form Below</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <div className="google-maps">
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=3,%20Plot%20no.%20145,%20near%20Indian%20Institute%20Of%20Information%20Technology%20Road,%20Devprayagam%20Colony,%20Jhalwa,%20Prayagraj,%20Dadanpur,%20Uttar%20Pradesh%20211012+(Opam%20technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;

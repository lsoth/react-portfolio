import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_f3r3hmm";
  const templateID = "template_8e1e9o9";
  const userID = "user_PIQut8WmbYB2zGxXFh4Vu";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="container">
      <div className = "contacts">
        <div className="text-center">
          <h1>Contact Me!</h1>
          <p>Enter your information below!</p>
        </div>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
        {/* Name Input */}
        <input id="name" type= "text" className="form-control"
        placeholder="Name"
        name="name"
        />
        {/* Phone Input */}
        <input id="phone"type= "text" className="form-control"
        placeholder="Phone Number"
        name="phone"
        />
        {/* Email Input */}
        <input id="email"type= "email" className="form-control"
        placeholder="Email"
        name="email"
        />
        {/* Subject Input */}
        <input id="subject"type= "text" className="form-control"
        placeholder="Subject"
        name="subject"
        />
        </div>
        <div className="col-md-6 col-xs-12">
        <textarea id="description"type= "text"className="form-control"
        placeholder="Description"
        name="description"
        ></textarea>
        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
        </div>
      </div>
    </div>
    </div>
  );
}

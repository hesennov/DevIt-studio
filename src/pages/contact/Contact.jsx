import { useState } from "react";
import { headerColor } from "../../constant/colors";
import { primaryColor } from "../../constant/colors";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you can implement the logic to send the form data to a server or perform any desired action

      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-md">
      <h1
        className="text-5xl pt-24 pb-10 text-center font-bold"
        style={{ color: headerColor }}
      >
        Contact Us
      </h1>
      {isSubmitted ? (
        <div className="text-green-500 text-center">
          Thank you for your message!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-light">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-light">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-light">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.message ? "border-red-500" : "border-gray-200"
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="`w-full flex mx-auto mt-8 px-6 py-3 rounded text-white text-xs font-light"
            style={{ background: primaryColor }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

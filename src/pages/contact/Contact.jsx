import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { headerColor } from "../../constant/colors";

const ContactForm = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kun5sis",
        "template_pvzu7tt",
        form.current,
        "IAPCfIhTf9Q12j7YF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email is sent successfully");
          setIsEmailSent(true); // Set the email sent state to true
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-md">
      <h1
        className="text-5xl pt-24 pb-10 text-center font-bold"
        style={{ color: headerColor }}
      >
        Contact Us
      </h1>
      {isEmailSent ? (
        <p className="text-green-500 text-center mb-4">
          Thank you for your message! We will get back to you soon.
        </p>
      ) : null}
      <form ref={form} onSubmit={sendEmail}>
        <label className="block mb-1 font-light">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full px-4 py-2 border rounded border-gray-200 mb-4"
        />
        <label className="block mb-1 font-light">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full px-4 py-2 border rounded border-gray-200 mb-4"
        />
        <label className="block mb-1 font-light">Message</label>
        <textarea
          name="message"
          className="w-full px-4 py-2 border rounded border-gray-200 mb-4"
        />
        <input
          type="submit"
          value="Send"
          className="`w-full flex mx-auto mt-8 px-6 py-3 rounded text-white text-xs font-light bg-indigo-400 hover:bg-indigo-700"
        />
      </form>
    </div>
  );
};

export default ContactForm;

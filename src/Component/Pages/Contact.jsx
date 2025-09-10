import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  // ✅ Replace this with your actual Google Form "formResponse" URL
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse';

  // ✅ Replace entry.xxxxxx with your actual Google Form field entry IDs
  const ENTRY_IDS = {
    name: "entry.1111111111",
    tel: "entry.2222222222",
    email: "entry.3333333333",
    message: "entry.4444444444"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formBody = new FormData();
    formBody.append(ENTRY_IDS.name, formData.name);
    formBody.append(ENTRY_IDS.tel, formData.tel);
    formBody.append(ENTRY_IDS.email, formData.email);
    formBody.append(ENTRY_IDS.message, formData.message);

    try {
      // Submit silently to Google Form
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      // Show success popup
      setShowPopup(true);

      // Reset form
      setFormData({
        name: '',
        tel: '',
        email: '',
        message: ''
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  const handleContinue = () => {
    setShowPopup(false);
    navigate("/Aplayground/BMIcalc");
  };

  return (
    <>
      <section className="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5 mt-12 md:mt-18 text-blue-950">
        {/* Contact Info */}
        <div className="lg:w-1/2 lg:pb-0 pb-10">
          <h2 className="text-[38px] font-bold mb-5">
            Contact <span className="text-[#0074F2]">Info</span>
          </h2>
          <p className="pb-5 lg:pr-20">
            Have a project in mind or just want to connect? I'm always open to discussing web development, technology trends, or how I can help bring your digital vision to life.
          </p>

          <div className="space-y-4">
            {/* Location */}
            <div>
              <h4 className="text-lg font-normal">Location</h4>
              <address className="flex items-start gap-2 pt-3 not-italic">
                <IoLocationOutline size={24} className="text-blue-500 text-2xl" />
                <span>Noida, Uttar Pradesh, India</span>
              </address>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-lg font-medium mt-4">Email</h4>
              <a
                href="mailto:rikkypatel730@gmail.com"
                className="flex items-center gap-2  text-blue-950"
              >
                <MdOutlineEmail size={22} className="text-blue-500" />
                rikkypatel730@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-lg font-medium mt-4">Phone</h4>
              <a
                href="tel:+916387291201"
                className="flex items-center gap-2  text-blue-950"
              >
                <FaPhoneAlt size={18} className="text-blue-500" />
                +91 6387291201
              </a>
            </div>
          </div>

          {/* whasapp button */}

          <a
            href="https://wa.me/916387291201?text=Hi%20Aryan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="cursor-pointer text-black flex gap-2 items-center bg-zinc-200 mt-6 m-auto px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200"
            >
              <IoLogoWhatsapp size={24} />
              Whastapp Chat
            </button>
          </a>


        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 flex flex-col text-blue-950 py-6 rounded-xl pt-16 lg:px-10 md:px-16 px-5 bg-slate-50 lg:pt-7">
          <h2 className="text-lg font-medium text-blue-700 mb-4">
            Let’s Build Something Great Together 🚀
          </h2>

          <form className="space-y-2 w-full" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-1 mt-4">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border-gray-600 bg-white rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="tel" className="block text-gray-600 font-semibold mb-1 mt-4">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full border-gray-600 bg-white rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-1 mt-4">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border-gray-600 bg-white rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-1 mt-4">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full border-gray-600 bg-white rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-1 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2 hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
              >
                Send Contact
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[300px] text-center shadow-lg">
            <h2 className="text-green-600 text-xl font-semibold mb-2">Submitted Successfully ✅</h2>
            <p className="text-gray-700 mb-4">Thank you for contacting me. I’ll get back to you shortly.</p>
            <button
              onClick={handleContinue}
              className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

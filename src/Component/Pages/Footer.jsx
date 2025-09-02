import { FaGithub, FaLinkedin, FaWhatsapp, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white via-[#f8f9fb] to-[#ecf1f8] text-gray-700 px-6 md:px-16 pt-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* Branding + Social */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-black">React JS Developer</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Crafting engaging digital experiences with attention to detail and a passion for clean, functional design.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="https://github.com/aryank730" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 p-2 rounded-md hover:scale-110 transition">
                <FaGithub />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/aryank730" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 p-2 rounded-md hover:scale-110 transition">
                <FaLinkedin />
              </button>
            </a>

            <a href="https://x.com/aryan_k7_" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 p-2 rounded-md hover:scale-110 transition">
                <BsTwitterX />
              </button>
            </a>


          </div>
        </div>

        {/* Quick Links */}
        <div>
          <section id="CallMe" class="relative  ">
            <div class="z-20 relative px-5 m-auto  flex flex-wrap gap-7 justify-center  mx-auto ">

              <div class=" bg-white p-4 rounded-xl shadow hover:shadow-lg flex text-center items-center gap-2 ">
                <FaWhatsapp size={28} />
                <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-md  "><a target="_blank"
                  href="https://wa.me/6387291201">+91 Whatsapp</a></p>
              </div>

              <a target="_blank" href="https://www.linkedin.com/in/aryank730">
                <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg flex text-center items-center gap-2">
                  <CiLinkedin size={28} />
                  <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-md ">aryank730</p>
                </div>
              </a>

              <a href='https://github.com/aryank730' target='blank'>
                <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg flex text-center items-center gap-2">
                  <FaGithub size={28} />
                  <p class="text-sm text-center font-regular text-[#A4A4A5] sm:text-md ">@aryank730</p>
                </div>
              </a>
            </div>
          </section>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-md"><FaEnvelope /></span>
              <span>rikkypatel730@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-md"><FaPhone /></span>
              <span>+91 6387291201</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-md"><FaMapMarkerAlt /></span>
              <span>Noida sec 135, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

      </div >

      {/* Divider */}
      < hr className="my-4 border-gray-300" />

      {/* Copyright */}
      < div className="text-sm text-start text-gray-600" >
        © 2025 < span className="font-semibold text-blue-600" > Aryan k.</span > All rights reserved.
        Made with <span className="text-red-500">🧋</span> by < span className="text-blue-600 font-semibold" >Aryan</span >
      </div >
    </footer >
  );
};

export default Footer;

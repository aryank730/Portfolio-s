import { FaGithub, FaLinkedin, FaWhatsapp, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./Footer.css"
import { RiTelegram2Fill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white via-[#f8f9fb] to-[#ecf1f8] text-gray-700 px-6 md:px-16 pt-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* Branding + Social */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-black">MERN Stack Developer</span>
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
        <div className="m-auto  raltive">
          <div className=" relative w-1/3 m-auto pb-12">
            <div className="loader">
              <span>
                <span />
                <span />
                <span />
                <span />
              </span>
              <div className="base">
                <span />
                <div className="face" />
              </div>
            </div>
            <div className="longfazers">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <NavLink to="/Contact" >
          <button class=" abcolute mt-6 md:mt-12 m-auto cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
          >
            Contact Us 
            {/* <span class="text-slate-300/85"> ─ simple button</span> */}
          </button>
          </NavLink>
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

import React from 'react';

const Contact = () => {
  return (
    <>
      
      <section className="contact-section mt-18">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
            
            {/* Contact Info */}
            <div className="p-8 bg-gray-800 text-white">
              <h2 className="text-2xl text-blue-400 mb-8 relative pb-4">
                Contact Information
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
              </h2>

              {/* Location */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-lg mb-1">Our Location</h3>
                  <p className="text-gray-300 leading-relaxed">Lucknow</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone Numbers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <a href="tel:+978589658" className="hover:text-blue-400">+91 748598658</a><br />
                    <a href="tel:+748596255" className="hover:text-blue-400">+91 789456123</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email Address</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <a href="mailto:kuldeepprajapati2111@gmail.com" className="hover:text-blue-400">
                      kuldeepprajapati2111@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-500 transform hover:-translate-y-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-pink-500 transform hover:-translate-y-1">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-400 transform hover:-translate-y-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-700 transform hover:-translate-y-1">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8">
              <h2 className="text-2xl text-blue-500 mb-8 relative pb-4">
                Send Us a Message
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
              </h2>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <input type="tel" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-400 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 hover:shadow-lg transition duration-300">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

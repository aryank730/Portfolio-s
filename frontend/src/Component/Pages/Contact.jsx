import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const formBody = new FormData(form);

    try {
      await fetch('https://formsubmit.co/aryanktr730@gmail.com', {
        method: 'POST',
        body: formBody,
      });
      setShowPopup(true);
      form.reset();
    } catch (error) {
      alert('Something went wrong. Please try again, or email me directly.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14">
          <div className="spine pl-6 md:pl-10">
            <p className="tick font-mono text-sm text-muted mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl text-text font-semibold mb-5">
              Let's build something great together
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Have a project in mind or just want to connect? I'm always open to discussing web
              development, system architecture, or how I can help bring your product to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1"><IoLocationOutline size={20} /></span>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-mono">Location</p>
                  <p className="text-text mt-1">Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent mt-1"><MdOutlineEmail size={20} /></span>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-mono">Email</p>
                  <a href="mailto:aryanktr730@gmail.com" className="text-text mt-1 block hover:text-accent transition">
                    aryanktr730@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent mt-1"><FaPhoneAlt size={18} /></span>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-mono">Phone</p>
                  <a href="tel:+916387291201" className="text-text mt-1 block hover:text-accent transition">
                    +91 6387291201
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/916387291201?text=Hi%20Aryan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-line rounded-sm text-text hover:border-accent hover:text-accent transition"
            >
              <IoLogoWhatsapp size={20} />
              WhatsApp Chat
            </a>
          </div>

          <div className="bg-surface border border-line rounded-sm p-6 md:p-8 h-fit">
            <h3 className="font-display text-lg text-text font-medium mb-5">Send a message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from portfolio contact form" />

              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-1.5">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="tel" className="block text-sm text-muted mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-1.5">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-surface border border-line rounded-sm p-6 w-full max-w-sm text-center">
            <h2 className="text-live text-lg font-display font-semibold mb-2">Message sent</h2>
            <p className="text-muted mb-5 text-sm">
              Thanks for reaching out — I'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-accent text-ink px-5 py-2 rounded-sm font-medium hover:brightness-110 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
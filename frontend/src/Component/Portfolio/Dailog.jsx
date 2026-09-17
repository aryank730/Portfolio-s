import React from 'react';
import Email from './Email';

const Dailog = () => {
  return (
    <section className="bg-surface py-20 px-6 md:px-12 border-t border-line">
      <div className="max-w-5xl mx-auto spine pl-6 md:pl-10 text-left">
        <p className="tick font-mono text-sm text-muted mb-3">Get in touch</p>
        <h2 className="font-display text-3xl md:text-4xl text-text font-semibold max-w-xl">
          Have a product to build, or a system to fix?
        </h2>
        <p className="text-muted text-lg mt-4 max-w-xl">
          Drop your email and I'll get back to you — or reach out directly at{' '}
          <a href="mailto:aryanktr730@gmail.com" className="text-accent">aryanktr730@gmail.com</a>.
        </p>
        <div className="max-w-md mt-8">
          <Email />
        </div>
      </div>
    </section>
  );
};

export default Dailog;
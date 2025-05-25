'use client';

import Spline from '@splinetool/react-spline';

const ContactSection = () => {
  return (
    <section className="relative py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">

      {/* Contact Card Content */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-gray-300 p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Contact Information</h2>

        <div className="space-y-5">
          {[
            ["Primary Email", "krithickbalaji2@gmail.com", "mailto:krithickbalaji2@gmail.com"],
            ["Secondary Email", "krithickbalaji500@gmail.com", "mailto:krithickbalaji500@gmail.com"],
            ["Contact Number", "+91 6385516155", "tel:+916385516155"],
            ["LinkedIn", "linkedin.com/in/krithick-balaji-ramesh", "https://www.linkedin.com/in/krithick-balaji-ramesh-546245255/"],
            ["YouTube", "youtube.com/@krithickbalaji3755", "https://www.youtube.com/@krithickbalaji3755"],
          ].map(([label, text, link]) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center">
              <span className="w-48 font-semibold text-gray-600">{label}:</span>
              <a
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                {text}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Spline Scene Below Contact Info */}
      <div className="mt-16 h-[500px] w-full">
        <Spline scene="https://prod.spline.design/EbjeLPiHxNvA6AzZ/scene.splinecode" />
      </div>
    </section>
  );
};

export default ContactSection;

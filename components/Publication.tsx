import React from "react";

const publications = [
  {
    title:
      "Drone-Based Aerial Surveillance and Hazardous Gas Detection with Power BI Dashboard Integration for Low-Latency Environmental Risk Analysis",
    authors: "Krithick Balaji Ramesh, Saran S",
    journal: "IEEE ICMCSI 2025, Published in IEEE Xplore",
    date: "2025",
    link: "https://ieeexplore.ieee.org/document/10883127",
  },
  {
    title:
      "IoT-Enabled LPG Leakage Monitoring System Leveraging ESP32 with MQTT Protocol and Flutter-Based Real-Time Alert Dashboard",
    authors: "Krithick Balaji Ramesh, PG Sivaranjan",
    journal:
      "International Conference on Frontiers in Engineering (ICOFE 2024), K.S.R. College of Engineering, Tamil Nadu, India",
    date: "22–23 October 2024",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5088837",
  },
  {
    title:
      "Smart IntelliSecure-Based LPG and Fire Safety System with Automatic Door Control Utilizing Integrated Sensor Fusion and Automated Actuation",
    authors: "Krithick Balaji Ramesh, PG Sivaranjan, Dr. M Vijayalakshmi",
    journal:
      "International Conference on Computing Technologies and Communication Innovations (ICCTCCI 2025), Institute of Management and Information Technology, Cuttack, India",
    date: "28–29 March 2025",
    link: "https://drive.google.com/file/d/11EJ0JbcrLYkXOYV8MO4pkvBBWAsZQSm0/view?usp=sharing",
  },
  {
    title:
      "Multimodal AI-Enhanced Educational Assistant with Real-Time Q&A Inference and Context-Aware Learning Support Engine",
    authors: "Krithick Balaji Ramesh, Saran S",
    journal:
      "International Conference on Emerging Technologies (ICET 2025), Noida, India",
    date: "May 3, 2025",
    link: "https://drive.google.com/file/d/1KInkV9h39ISwGHI7EdTTLmE_k36Zvkz7/view?usp=sharing",
  },
];

const Publication: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-10 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Published Research Papers
        </h2>

        <div className="space-y-10">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 border border-blue-200 p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {pub.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-medium text-gray-900">Authors: </span>
                {pub.authors}
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-1">
                <span className="font-medium text-gray-900">Conference: </span>
                {pub.journal}
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-1">
                <span className="font-medium text-gray-900">Date: </span>
                {pub.date}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View Full Publication →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publication;

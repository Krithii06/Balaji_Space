import React from 'react';

export default function Awards() {
  const awards = [
    {
      title: 'Special Prize – Expo 2025 – Best Satellite',
      subtitle: 'Suraj Narayana Mark-3',
      organization: 'SRMIST Chennai',
      date: '',
      description:
        'Won Special Prize for Best Satellite for Suraj Narayana Mark-3 Cosmic Satellite project.',
    },
    {
      title: 'Knowledge Exchanger',
      date: 'Oct 2022',
      organization: 'SRM Institute of Science and Technology',
      description:
        'Awarded as Knowledge Exchanger for the KIXP (Knowledge & Innovation Exchange Program) - Skill development program.',
    },
    {
      title: 'National Engineering Olympiad',
      date: 'Mar 2022',
      organization: '',
      description:
        'Participated and received certification in the 6th National Engineering Olympiad for UG students.',
    },
    {
      title: 'Embedded Programming Challenge',
      date: 'Dec 2023',
      organization: 'IIT Madras – Shaastra 2023',
      description:
        'Participated in the Embedded Programming Challenge during Shaastra 2023. Gained hands-on experience in a competitive technical environment.',
    },
    {
      title: 'Hack-Trix Hackathon – 2nd Place',
      date: 'Mar 2024',
      organization: '',
      description:
        'Won 2nd place and ₹2000 cash prize for developing an LPG Gas Detection System using Arduino Uno, ESP32, Flutter, and Firebase. Recognized among 80 teams.',
    },
    {
      title: 'SRM Project Expo – CSE (C. Tech Dept) – 2nd Place',
      date: 'Mar 2024',
      organization: 'SRM Institute of Science & Technology',
      description:
        'Received ₹5000 cash prize for LPG Gas Detection Project integrating Arduino Uno, ESP32, and Flutter. Secured 2nd place among 71 teams.',
    },
    {
      title: 'RAEEUCCI 2024 – 3rd International Conference – 2nd Place',
      date: 'Apr 2024',
      organization: 'ECE Department, SRMIST',
      description:
        'Secured 2nd prize in the Project Expo at RAEEUCCI 2024 International Conference conducted by the ECE Department.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">🏆 Awards & Competitions</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{award.title}</h2>
              <p className="text-sm text-gray-500 mb-1">
                {award.date && <span>{award.date} · </span>}
                {award.organization}
              </p>
              <p className="text-gray-700 mt-2">{award.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://drive.google.com/drive/folders/1JNpM-kIZbc3jPr28wMR-evT42XqNtj30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-indigo-600 hover:underline"
          >
            📄 Click the Link - For Certificate Verification
          </a>
        </div>
      </div>
    </div>
  );
}

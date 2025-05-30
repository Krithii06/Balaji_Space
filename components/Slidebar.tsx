'use client';

import { Dispatch, SetStateAction } from 'react';

type Tab =
  | 'home'
  | 'projects'
  | 'publications'
  | 'research'
  | 'awards'
  | 'certification'
  | 'upcomingbook'
  | 'contact';

type SidebarProps = {
  activeTab: Tab;
  setActiveTab: Dispatch<SetStateAction<Tab>>;
};

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const tabs: { label: string; key: Tab }[] = [
    { label: 'Home', key: 'home' },
    { label: 'Projects', key: 'projects' },
    { label: 'Publications', key: 'publications' },
    { label: 'Research', key: 'research' },
    { label: 'Awards', key: 'awards' },
    { label: 'Certification', key: 'certification' },
    { label: 'Upcoming Book', key: 'upcomingbook' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <aside className="w-80 bg-[#111827] text-white p-8 rounded-2xl shadow-2xl border border-white/10">
      {/* Name at the top */}
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        Krithick Balaji Ramesh
      </h2>

      {/* Profile image */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="w-48 h-64 object-cover mb-5 shadow-lg border-4 border-white/20 transition duration-300"
        />
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.key ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contact details */}
      <div className="space-y-4 text-sm">
        <ContactItem label="Email" link="mailto:krithickbalaji2@gmail.com" text="krithickbalaji2@gmail.com" />
        <ContactItem label="Phone" link="tel:+916385516155" text="+91 6385516155" />
        <ContactItem label="GitHub" link="https://github.com/Krithii06" text="github.com/Krithii06" />
        <ContactItem label="LinkedIn" link="https://www.linkedin.com/in/krithick-balaji-ramesh-546245255" text="linkedin.com/in/krithick-balaji-ramesh" />
        <ContactItem label="Student Satellite Club" link="https://nskyon.vercel.app" text="nskyon.vercel.app" />
        <p><span className="font-semibold text-white/80">Location:</span> India</p>
      </div>
    </aside>
  );
};

const ContactItem = ({
  label,
  link,
  text,
}: {
  label: string;
  link: string;
  text: string;
}) => (
  <p>
    <span className="font-semibold text-white/80">{label}:</span>{" "}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200"
    >
      {text}
    </a>
  </p>
);

export default Sidebar;

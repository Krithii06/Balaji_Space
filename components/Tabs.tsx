type TabType =
  | 'home'
  | 'projects'
  | 'publications'
  | 'research'
  | 'awards'
  | 'certification'
  | 'upcomingbook'
  | 'contact'; // Added 'contact' tab

type TabProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

const Tabs = ({ activeTab, setActiveTab }: TabProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* About Tab */}
      <button
        onClick={() => setActiveTab('home')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'home'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        About
      </button>

      {/* Experience Tab */}
      <button
        onClick={() => setActiveTab('research')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'research'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Experience
      </button>

      {/* Publications Tab */}
      <button
        onClick={() => setActiveTab('publications')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'publications'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Publications
      </button>

      {/* Projects Tab */}
      <button
        onClick={() => setActiveTab('projects')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'projects'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Projects
      </button>

      {/* Awards Tab */}
      <button
        onClick={() => setActiveTab('awards')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'awards'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Awards
      </button>

      {/* Certification Tab */}
      <button
        onClick={() => setActiveTab('certification')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'certification'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Certification
      </button>

      {/* Upcoming Book Tab */}
      <button
        onClick={() => setActiveTab('upcomingbook')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'upcomingbook'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Book
      </button>

      {/* Contact Tab */}
      <button
        onClick={() => setActiveTab('contact')}
        className={`px-4 py-2 rounded-md transition-colors ${
          activeTab === 'contact'
            ? 'bg-blue-600 text-white font-semibold'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Contact
      </button>
    </div>
  );
};

export default Tabs;

import React from 'react';


const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-50 text-gray-900">
      <div className="relative shadow-md rounded-2xl p-8 max-w-4xl w-full bg-white border border-gray-200">

        {/* Resume button top-right */}
        <a
          href="Balaji_Resume.pdf" // ← Replace with your actual resume URL
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Resume
        </a>

        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600 tracking-wide">
          About Me
        </h1>

        {/* Biography */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-300 pb-2">
            Biography
          </h2>
          <p className="text-justify leading-relaxed mb-4">
            I am an Embedded Systems and Robotics Engineer specializing in aerospace applications. My
            work focuses on building intelligent, high-performance systems for mission-critical
            environments such as space exploration and autonomous systems. I have hands-on experience developing embedded firmware, integrating sensors, and optimizing real-time control systems.
          </p>
          <p className="text-justify leading-relaxed mb-4">
            My expertise includes firmware engineering with FreeRTOS, embedded Linux, sensor interfacing, and hardware-software integration. I take pride in designing systems that merge hardware and software seamlessly, ensuring reliable performance under extreme conditions.
          </p>
          <p className="text-justify leading-relaxed mb-4">
            During my undergraduate studies, I led and contributed to multiple research and robotics
            projects aimed at solving real-world problems in embedded automation, environmental
            monitoring, and aerospace safety. I am deeply passionate about advancing embedded
            intelligence to support next-generation aerospace missions and robotics innovations.
          </p>
          <p className="text-justify leading-relaxed">
            My long-term goal is to contribute to the development of autonomous, space-grade systems
            that can operate independently in unknown or harsh environments, enhancing both scientific
            discovery and human safety.
          </p>
        </section>

        {/* Education Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Education Timeline
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <time className="min-w-[110px] font-semibold text-blue-600 text-sm tracking-wide">
                2021 - 2025 ----
              </time>
              <div>
                <h3 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-gray-700">
                  SRM Institute of Science and Technology, Chennai, India — CGPA: 8.44/10
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <time className="min-w-[110px] font-semibold text-blue-600 text-sm tracking-wide">
                2020 - 2021 ----
              </time>
              <div>
                <h3 className="font-semibold text-gray-900">Minor in Computer Science (12th Grade)</h3>
                <p className="text-gray-700">SBOA Matriculation and Higher Secondary School, Madurai</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-10">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-300 pb-2">
    Research Interests
  </h2>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Embedded Systems Design and Optimization for Real-Time Applications</li>
    <li>Automation Robotics and Intelligent Control Systems</li>
    <li>Embedded Computing for Autonomous Systems</li>
    <li>Development of Embedded Operating Systems and Firmware</li>
    <li>Control Systems Theory applied to Robotics and Space Missions</li>
    <li>Sensor Fusion and Data Analytics for Environmental Monitoring</li>
    <li>AI Integration in Educational Technologies</li>
  </ul>
  <p className="mt-3 text-sm italic text-gray-600">
    Passionate about advancing embedded hardware, automation robotics, and intelligent systems for aerospace applications. My interests align with NASA JPL’s pioneering space exploration missions and Microsoft’s innovation in cloud, AI, and IoT platforms supporting next-generation embedded and robotic solutions.
  </p>
</section>


        {/* Skills & Tools */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-300 pb-2">
            Skills & Tools
          </h2>

          <div className="space-y-4 text-gray-900 font-semibold">
            <p>
              <span className="text-blue-600">Technical Skills:</span> Python, FreeRTOS, Embedded C
            </p>
            <p>
              <span className="text-blue-600">Firmware Skills:</span> Firmware engineering, Sensor Interfacing, Real-Time Systems
            </p>
            <p>
              <span className="text-blue-600">Cloud & Frameworks:</span> G-Firebase, Microsoft Azure, React-JS
            </p>
            <p>
              <span className="text-blue-600">Systems & Design:</span> Satellite Systems, Fusion360 3D Models
            </p>
            <p>
              <span className="text-blue-600">Aerospace Engineering:</span> Basic Rocket Engines (Solid & Liquid), Mini Satellite Designing & Development
            </p>
            <p>
              <span className="text-blue-600">Tools:</span> VS Code, Jupyter Notebook.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

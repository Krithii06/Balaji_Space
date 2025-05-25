export default function Projects() {
  return (
    <div className="space-y-6 px-4 md:px-12 py-8">
      <h2 className="text-3xl font-bold text-blue-600">My Projects</h2>

      {/* Descriptions Section */}
      <div className="space-y-6">

        {/* LPG Leakage Monitoring Project */}
        <div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">
          <h3 className="text-2xl font-semibold">IOT-Enabled LPG Leakage Monitoring</h3>
          <p className="text-gray-700">
            Designed an IoT-based system with embedded firmware on Arduino Uno and ESP32 microcontrollers, utilizing MQ-2 gas sensors to detect LPG leaks.
            The system immediately alerts users via a Flutter mobile application. This project blends hardware interfacing, real-time cloud telemetry,
            and embedded robotics for proactive safety management in residential and industrial environments.
          </p>
        </div>

        {/* Suraj Narayana Mark-1 Project */}
        <div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">
          <h3 className="text-2xl font-semibold">Suraj Narayana Mark-1 Mini Satellite</h3>
          <p className="text-gray-700">
            Introducing Suraj Narayana Mark-1 — a prototype mini satellite built with recycled electronics and custom firmware running on low-power microcontrollers.
            This project emphasizes robotics principles and cost-effective space hardware design inspired by Kalam-Sat, the world’s lightest satellite launched by NASA.
            It uses thermal radiation sensors to measure temperature in the near-vacuum conditions of space.
          </p>
        </div>

        {/* Suraj Narayana Mark-3 Project */}
        <div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">
          <h3 className="text-2xl font-semibold">Suraj Narayana Mark-3: Cosmic Radiation Satellite</h3>
          <p className="text-gray-700">
            An advanced mini satellite incorporating AI-powered anomaly detection algorithms, software-defined radio (SDR) for telemetry,
            and GPS tracking. The system firmware integrates robotics control for sensor operations, enabling real-time cosmic radiation
            monitoring. Data visualization is enabled through a Streamlit web application designed for high-altitude scientific research.
          </p>
        </div>

        {/* Drone Deployment Frame Project */}
        <div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">
          <h3 className="text-2xl font-semibold">Drone-Based Mini Satellite Deployment</h3>
          <p className="text-gray-700">
            Developed a robotics-enabled drone system featuring GPS-assisted launch mechanisms to deploy femtosats and picosats.
            The embedded firmware controls precise release operations, eliminating the need for costly launch vehicles.
            This approach enables affordable deployment for scientific missions, disaster monitoring, and climate surveillance.
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="pt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Project Demos</h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          {/* Video 1: LPG Monitoring */}
          <div className="w-full max-w-md">
            <iframe
              className="w-full h-60 rounded-md border"
              src="https://www.youtube.com/embed/fzdIltnceJE"
              title="LPG Monitoring Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="text-center font-semibold mt-2">
              IOT-Enabled LPG Leakage Monitoring - Demo
            </h4>
          </div>

          {/* Video 2: Mark-1 Satellite */}
          <div className="w-full max-w-md">
            <iframe
              className="w-full h-60 rounded-md border"
              src="https://www.youtube.com/embed/7IN1Z8E19uc"
              title="Mark-1 Satellite Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="text-center font-semibold mt-2">
              Suraj Narayana Mark-1 Satellite - Demo
            </h4>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Video 3: Vimana */}
          <div className="w-full max-w-md">
            <iframe
              className="w-full h-60 rounded-md border"
              src="https://www.youtube.com/embed/T6va9CYHJK0" // Replace with actual link
              title="Vimana Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="text-center font-semibold mt-2">
              Vimana - Drone Satellite Deployment System
            </h4>
          </div>

          {/* Video 4: Mark-2 Satellite */}
          <div className="w-full max-w-md">
            <iframe
              className="w-full h-60 rounded-md border"
              src="https://www.youtube.com/embed/clvsi9B4gw4" // Replace with actual link
              title="Suraj Narayana Mark-2 Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="text-center font-semibold mt-2">
              Suraj Narayana Mark-2 Satellite - Demo
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

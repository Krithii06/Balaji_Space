import React from "react";

const ResearchExperience = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md my-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 border-b pb-2">
        Research Experience
      </h2>

      {/* Founder & CEO - N-Sky-On Club */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Founder, N-Sky-On Mini Satellite & Space Innovation Club
        </h3>
        <p className="text-sm text-gray-600 mb-2">Present (Hybrid)</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Initiated and led a student-driven aerospace innovation hub focused on CubeSat prototyping, mission simulation, and hardware integration for space systems.
          </li>
          <li>
            Spearheaded Project Vimana: a UAV-based aerial surveillance and multi-gas detection platform integrating GPS, MQ-series sensors, and real-time data streaming via ESP32 and Firebase.
          </li>
        </ul>
      </div>

      {/* Research Engineer – SRMIST (Gas System) */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Research Engineer – Embedded Systems, SRM Institute of Science and Technology
        </h3>
        <p className="text-sm text-gray-600 mb-2">Mar 2024 – Nov 2024 (On-site, India)</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Engineered a real-time LPG detection system using Arduino Uno, MQ-2 sensor, and custom-designed PCB with UART-based serial telemetry to a Flutter-based mobile dashboard.
          </li>
          <li>
            Implemented IoT cloud integration using Firebase for fault logging, system diagnostics, and mobile alerts with Firebase Realtime Database and NodeMCU.
          </li>
          <li>
            Published a Scopus-indexed research paper on the system architecture, hardware validation, and power optimization techniques.
          </li>
        </ul>
      </div>

      {/* Rocket Propulsion Intern – Dwello Aerospace */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Rocket Propulsion Intern, Dwello Aerospace
        </h3>
        <p className="text-sm text-gray-600 mb-2">Feb 2025 – Mar 2025 (Hybrid)</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Designed a variable-area rocket nozzle using computational fluid dynamics (CFD) to simulate exhaust behavior and optimize thrust vectoring.
          </li>
          <li>
            Performed performance calculations for exit velocity, expansion ratio, and specific impulse using Python, nozzle theory equations, and thermodynamic modeling.
          </li>
          <li>
            Utilized Fusion 360 for 3D CAD modeling and analyzed combustion chamber-nozzle transition for solid and liquid propulsion engines.
          </li>
        </ul>
      </div>

      {/* Research Engineer – SRMIST (LPG + Fire Safety) */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Research Engineer – Embedded Safety Systems, SRM Institute of Science and Technology
        </h3>
        <p className="text-sm text-gray-600 mb-2">Jan 2025 – Apr 2025 (On-site, India)</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Developed IntelliSecure – an embedded LPG and fire safety system with integrated solenoid-actuated automatic door control and hazard detection.
          </li>
          <li>
            Programmed system logic for multi-sensor fusion (MQ-5, flame sensors) with emergency shutoff protocols, buzzer alerts, and real-time Firebase push notifications.
          </li>
          <li>
            Designed efficient interrupt-based routines to reduce power consumption in microcontroller environments (ATmega328P).
          </li>
        </ul>
      </div>

      {/* AI Intern – Suvidha Mahila Mandal */}
<div>
  <h3 className="text-xl font-semibold text-gray-900">
    AI Research Intern, Suvidha Mahila Mandal
  </h3>
  <p className="text-sm text-gray-600 mb-2">Mar 2023 – Apr 2023 (Hybrid)</p>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li>
      Developed Natural Language Processing (NLP) pipelines for sentiment analysis and multi-class text classification using LSTM, GRU, and Transformer-based models (BERT).
    </li>
    <li>
      Trained, tuned, and evaluated models on real-world social welfare datasets with text pre-processing using NLTK and embeddings via Word2Vec and BERT Tokenizers.
    </li>
    <li>
      Deployed models as RESTful endpoints using <strong>Azure Machine Learning</strong> with real-time inference, model versioning, and monitoring via Azure Application Insights.
    </li>
    <li>
      Designed an interactive front-end using <strong>Streamlit</strong> for visualization, prediction interface, and A/B testing of deployed models.
    </li>
    <li>
      Tools & Technologies: Python, Azure ML Studio, TensorFlow, PyTorch, Scikit-learn, NLTK, Streamlit, REST API.
    </li>
  </ul>

      </div>
    </div>
  );
};

export default ResearchExperience;

import { CheckCircle } from "lucide-react"; // Optional: For icons

const Certification = () => {
  return (
    <div className="space-y-10">
      {/* Global Industry Certification */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-2 border-blue-200">
          🌐 Global Industry Based Certification
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-white shadow-md rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Microsoft Certified - Azure AI Fundamentals
          </h3>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Proctored Exam Score:</span> 785 / 1000
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Key Skills:</span> Machine Learning, Natural Language Processing, Computer Vision, Generative AI
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Earned Microsoft Azure AI Fundamentals certification with a score of 785/1000, demonstrating proficiency in AI
            applications including image and text analysis, language understanding, and knowledge extraction.
          </p>
        </div>
      </section>

      {/* Course Certificates */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-2 border-blue-200">
          📘 Course Certificates
        </h2>
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md border border-blue-100 space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <p>
              <strong>Joy of Computing Using Python</strong> - NPTEL (IIT Madras) – <span className="text-gray-700">Score: 71%</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <p>
              <strong>Python for Data Science</strong> - NPTEL (IIT Madras) – <span className="text-gray-700">Score: 65%</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <p>
              <strong>Introduction to Programming using Python</strong> – FOXMULA
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <p>
              <strong>The Raspberry Pi Platform and Python Programming</strong> – University of California, Irvine (Coursera)
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Certification;

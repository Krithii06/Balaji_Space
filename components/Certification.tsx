import { CheckCircle } from "lucide-react";

const Certification = () => {
  return (
    <div className="space-y-10 text-gray-900 font-sans text-base leading-relaxed">
      {/* Global Industry Certification */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 border-b pb-2 border-blue-200">
          🌐 Global Industry Based Certification
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-white shadow-md rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Microsoft Certified - Azure AI Fundamentals
          </h3>
          <p className="text-gray-800 mb-1">
            <span className="font-medium">Proctored Exam Score:</span> 785 / 1000
          </p>
          <p className="text-gray-800 mb-1">
            <span className="font-medium">Key Skills:</span> Machine Learning, Natural Language Processing, Computer Vision, Generative AI
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Earned Microsoft Azure AI Fundamentals certification with a score of 785/1000, demonstrating proficiency in AI applications including image and text analysis, language understanding, and knowledge extraction.
          </p>
        </div>
      </section>

      {/* Course Certificates */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 border-b pb-2 border-blue-200">
          📘 Course Certificates
        </h2>
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md border border-blue-100 space-y-4">
          {[
            {
              title: "Joy of Computing Using Python",
              source: "NPTEL (IIT Madras)",
              score: "Score: 71%",
            },
            {
              title: "Python for Data Science",
              source: "NPTEL (IIT Madras)",
              score: "Score: 65%",
            },
            {
              title: "Introduction to Programming using Python",
              source: "FOXMULA",
            },
            {
              title: "The Raspberry Pi Platform and Python Programming",
              source: "University of California, Irvine (Coursera)",
            },
          ].map((cert, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-gray-800">
                <strong>{cert.title}</strong> – {cert.source}
                {cert.score && (
                  <>
                    {" "}
                    – <span className="text-gray-700">{cert.score}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certification;

// components/UpcomingBook.tsx
import Image from "next/image";

const UpcomingBook = () => {
  return (
    <div className="text-center px-4 py-10 bg-white rounded-xl shadow-xl max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold text-blue-700">Upcoming Book</h2>

      <Image
        src="/Book.png" // Place Book.png in /public/
        alt="Vinveliyil Iyangu Kindra Venmathiyam"
        width={300}
        height={450}
        className="mx-auto rounded-lg shadow-lg border border-gray-200"
      />

      {/* Book Title (Tamil and English) */}
      <div>
        <p className="mt-4 font-bold text-xl text-gray-900">விண்வெளியில் இயங்கு கின்ற வெண்மதியம்</p>
        <p className="italic text-sm text-gray-600">Vinveliyil Iyangu Kindra Venmathiyam</p>
        <p className="mt-1 text-blue-800 font-semibold">Edited & Authored by: Krithick Balaji Ramesh</p>
      </div>

      {/* Summary Description */}
      <div className="text-left text-gray-800 leading-relaxed space-y-4">
        <p>
          <span className="font-bold">“விண்வெளியில் இயங்கு கின்ற வெண்மதியம்”</span> is a groundbreaking book that explores the intersection of <span className="font-semibold">space science, defense innovation, and futuristic satellite technologies</span>. Authored by <span className="text-blue-800 font-semibold">Krithick Balaji Ramesh</span>, this Tamil-English bilingual work delves into topics like miniaturized satellites, AI-powered surveillance, cosmic radiation studies, and advanced aerospace defense systems.
        </p>

        <p>
          From low-cost CubeSat missions to space-based monitoring for battlefield intelligence, this book serves as a visionary guide for students, researchers, and innovators interested in the next frontier of <span className="italic">space technology, national security, and scientific exploration</span>.
        </p>
      </div>
    </div>
  );
};

export default UpcomingBook;

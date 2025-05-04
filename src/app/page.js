'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [revealed, setRevealed] = useState(false);

  const handleNavigate = () => {
    router.push('/about');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-black dark:text-white">
        DormDine <span className="text-gray-500">– Under Development</span>
      </h1>

      <button
        onClick={() => setRevealed(!revealed)}
        className="mb-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        {revealed ? 'Hide Secret' : 'Reveal Secret'}
      </button>

      {revealed && (
        <>
          <p className="text-lg text-center text-green-600 font-semibold mb-4">
            🌟 The Best Recipe App 🌟
          </p>
          <button
            onClick={handleNavigate}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go to About Page →
          </button>
        </>
      )}
    </main>
  );
}

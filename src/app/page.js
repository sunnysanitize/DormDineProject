'use client'
import { useState } from 'react';

export default function Home() {
  const [revealed, setRevealed] = useState(false);

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
        <p className="text-lg text-center text-green-600 font-semibold">
          🌟 The Best Recipe App 🌟
        </p>
      )}
    </main>
  );
}

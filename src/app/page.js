'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function goToAboutPage() {
    router.push('/about');
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-[6vw] font-bold text-center"> DormDime, Your Recipe Companion! 🍽️ </h1>

      <button 
      onClick={() => goToAboutPage()} 
      className="mb-4 px-4 py-2 bg-black text-white rounded">
        Go to About Page →
        </button>
    </main>
  );
}

import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/Project';

export default function Home() {
  return (
    <main className='w-full h-full min-h-screen flex flex-col justify-center items-center'>
      <Hero />
      <Project />
    </main>
  );
}

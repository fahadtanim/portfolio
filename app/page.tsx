import Link from 'next/link';
import { getPortfolioData } from '@/lib/data';

export default function Home() {
  const data = getPortfolioData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-4 text-6xl font-bold text-slate-200 md:text-8xl">
          {data.name}
        </h1>
        <p className="mb-12 text-xl text-slate-400 md:text-2xl">{data.title}</p>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
          <Link
            href="/v1"
            className="group relative overflow-hidden rounded-full bg-teal-400/10 px-8 py-4 text-lg font-medium text-teal-300 transition-all duration-300 hover:scale-105 hover:bg-teal-400/20"
          >
            <span className="relative z-10">View V1 Design</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>

          <Link
            href="/v2"
            className="group relative overflow-hidden rounded-full bg-purple-400/10 px-8 py-4 text-lg font-medium text-purple-300 transition-all duration-300 hover:scale-105 hover:bg-purple-400/20"
          >
            <span className="relative z-10">View V2 Design</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Choose your preferred design experience
        </p>
      </div>
    </div>
  );
}

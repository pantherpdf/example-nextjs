import Link from 'next/link';
import { allReports } from './reports/allReports';

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className='text-6xl text-center mt-12 mb-12'>NextJS + PantherPDF</h1>


      <div className="flex justify-center">
        {allReports.map(item => (
          <Link
            key={item.id}
            href={`/reports/${item.id}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {item.name}&nbsp;&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}

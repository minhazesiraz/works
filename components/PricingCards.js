export default function PricingCards({ type, tagline, fee, basis, features, cta, isPopular }) {
  return (
     <>
      {/*<!-- Component: Basic Pricing Table with Details --> */}
      <div className="mx-auto max-w-sm">
        <div
          className={`flex flex-col overflow-hidden rounded shadow-lg transition 
            ${isPopular
              ? 'bg-emerald-500 text-white shadow-emerald-300 dark:shadow-emerald-950 dark:bg-emerald-600 dark:text-white'
              : 'bg-white text-slate-700 shadow-slate-300 dark:shadow-slate-950 dark:bg-slate-800 dark:text-slate-200'}`}
        >
          {/* Header */}
          <header className="flex flex-col gap-6 p-6">
            <h3 className="text-xl font-bold">
              {type}
              <span className="block text-sm font-normal opacity-80">
                {tagline}
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 lg:text-6xl">
                {fee}
              </span>
              <span className="text-sm">/{basis}</span>
            </h4>
            <button
              className={`inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide shadow transition duration-300
                ${isPopular
                  ? 'bg-white text-emerald-600 hover:bg-emerald-100 dark:hover:bg-emerald-200'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700'}`}
            >
              {cta}
            </button>
          </header>

          {/* Feature List */}
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((service, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-6 w-6 shrink-0 p-1 ${isPopular
                      ? '' : 'text-emerald-500 dark:text-emerald-500'}`}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <footer
            className={`p-6 text-center text-sm border-t
              ${isPopular
                ? 'border-emerald-800 bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-700'
                : 'border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <a
              href="#"
              className="transition-colors duration-300 hover:underline"
            >
              See all features
            </a>
          </footer>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table with Details --> */}
    </>
  );
}

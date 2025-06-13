import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 font-sans">
      <div className="relative w-24 h-32 md:w-32 md:h-40 perspective-1000">
        {/* Left Book Cover - "B" (static) */}
        {/* Uses light-green for the cover background and curry for the text, as per the theme. */}
        <div className="absolute inset-0 bg-light-green rounded-l-lg shadow-lg flex items-center justify-center z-20">
          <span className="text-curry text-3xl font-bold">B</span>
        </div>

        {/* Page 4 - "E" (bottom-most flipping page layer initially) */}
        {/* Pages use off-white background with dark-green borders and light-green text. */}
        <div className="absolute inset-0 bg-off-white border-l border-r border-dark-green rounded-lg shadow-inner flex items-center justify-center transform-origin-left animate-page-flip"
             style={{ animationDelay: '2.4s', zIndex: 10 }}> {/* Initial z-index for layering */}
          <span className="text-light-green text-lg md:text-xl font-semibold">E</span>
        </div>

        {/* Page 3 - "I" */}
        <div className="absolute inset-0 bg-off-white border-l border-r border-dark-green rounded-lg shadow-inner flex items-center justify-center transform-origin-left animate-page-flip"
             style={{ animationDelay: '1.8s', zIndex: 11 }}>
          <span className="text-light-green text-lg md:text-xl font-semibold">I</span>
        </div>

        {/* Page 2 - "K" */}
        <div className="absolute inset-0 bg-off-white border-l border-r border-dark-green rounded-lg shadow-inner flex items-center justify-center transform-origin-left animate-page-flip"
             style={{ animationDelay: '1.2s', zIndex: 12 }}>
          <span className="text-light-green text-lg md:text-xl font-semibold">K</span>
        </div>

        {/* Page 1 - "O" */}
        <div className="absolute inset-0 bg-off-white border-l border-r border-dark-green rounded-lg shadow-inner flex items-center justify-center transform-origin-left animate-page-flip"
             style={{ animationDelay: '0.6s', zIndex: 13 }}>
          <span className="text-light-green text-lg md:text-xl font-semibold">O</span>
        </div>

        {/* Right Book Cover - "O" (top-most flipping page layer initially) */}
        {/* Uses curry for the cover background and light-green for the text. */}
        <div className="absolute inset-0 bg-curry rounded-r-lg shadow-lg flex items-center justify-center transform-origin-left animate-page-flip"
             style={{ animationDelay: '0s', zIndex: 14 }}> {/* Starts the flip sequence */}
          <span className="text-light-green text-3xl font-bold">O</span>
        </div>

      </div>

      <style jsx>{`
        /* Define custom colors as CSS variables for use in Tailwind-like classes */
        :root {
          --color-curry: #FDD36B;
          --color-light-green: #234046;
          --color-dark-green: #DAF2F6;
          --color-off-white: #DAF2F6;
        }

        /* Custom Tailwind-like classes using defined CSS variables */
        .bg-curry { background-color: var(--color-curry); }
        .bg-light-green { background-color: var(--color-light-green); }
        .bg-dark-green { background-color: var(--color-dark-green); }
        .bg-off-white { background-color: var(--color-off-white); }
        .text-curry { color: var(--color-curry); }
        .text-light-green { color: var(--color-light-green); }
        .text-dark-green { color: var(--color-dark-green); }
        .border-dark-green { border-color: var(--color-dark-green); }

        /* Keyframes for a sequential page flip animation */
        @keyframes page-flip {
          0%, 100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
          /* Temporarily boost z-index to bring the current flipping page to the front */
          1% { z-index: 25; }
          /* Page flips open */
          15% {
            transform: rotateY(-180deg);
            opacity: 1;
          }
          /* Page stays open for a brief moment */
          20% {
            transform: rotateY(-180deg);
            opacity: 1;
          }
          /* After flip, reduce z-index and become invisible to reveal the next page */
          21% {
            opacity: 0;
            z-index: 5;
          }
          /* Stay hidden and reset position for the next cycle */
          99% {
            opacity: 0;
            transform: rotateY(0deg);
            z-index: 5;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-origin-left {
          transform-origin: left;
        }

        /* Applies the page-flip animation with a 3-second cycle */
        .animate-page-flip {
          animation: page-flip 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loader;

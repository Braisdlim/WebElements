import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { label: 'Reciente', value: 'recent' },
  { label: 'Popular', value: 'popular' },
  { label: 'Tendencias', value: 'trending' },
];

export default function Tabs() {
  const [active, setActive] = useState('recent');

  return (
    <div className="w-full flex flex-col items-center">
      <div className="inline-flex bg-zinc-900 border border-zinc-800 rounded-full p-1 relative">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 ${active === tab.value ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setActive(tab.value)}
            aria-selected={active === tab.value}
            tabIndex={0}
          >
            {active === tab.value && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6 text-zinc-300 text-center min-h-[32px]">
        {active === 'recent' && 'Contenido reciente.'}
        {active === 'popular' && 'Contenido popular.'}
        {active === 'trending' && 'Contenido en tendencia.'}
      </div>
    </div>
  );
} 
import { useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(60);
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col gap-2">
      <div className="flex justify-between text-xs text-zinc-400 mb-1">
        <span>Progreso</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
        <div
          className="h-full bg-zinc-200 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        className="mt-2 px-3 py-1 bg-zinc-900 text-white border border-zinc-700 rounded hover:bg-zinc-800 text-xs transition"
        onClick={() => setProgress((p) => (p >= 100 ? 0 : p + 10))}
      >
        Avanzar
      </button>
    </div>
  );
} 
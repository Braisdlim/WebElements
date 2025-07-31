export default function Avatar({ name = 'AB' }) {
  return (
    <span
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 text-white text-lg font-bold border border-zinc-700 select-none shadow"
      aria-label={`Avatar de ${name}`}
    >
      {name}
    </span>
  );
} 
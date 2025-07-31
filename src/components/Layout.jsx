import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 
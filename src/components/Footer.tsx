export function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-700">
          &copy; {new Date().getFullYear()} Angad Singh Arora
        </p>
        <p className="text-[11px] font-mono text-neutral-300 dark:text-neutral-800">
          next.js &middot; tailwind &middot; vercel
        </p>
      </div>
    </footer>
  );
}

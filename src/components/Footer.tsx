export function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} Angad Arora
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

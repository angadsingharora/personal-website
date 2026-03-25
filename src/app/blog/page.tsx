import Link from "next/link";

export const metadata = {
  title: "Blog | Angad Singh Arora",
  description: "Blog by Angad Singh Arora — coming soon.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-neutral-950">
      <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light">
        Coming soon...
      </p>
      <Link
        href="/"
        className="mt-8 px-5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-800 rounded-md hover:border-neutral-500 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-all"
      >
        &larr; Back home
      </Link>
    </div>
  );
}

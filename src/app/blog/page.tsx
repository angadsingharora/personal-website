import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Writing / Angad Singh Arora",
  description: "Notes by Angad Singh Arora.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-page px-6 py-24 sm:px-8 sm:py-32">
        <h1 className="text-[clamp(1.9rem,5vw,2.6rem)] leading-tight">Writing</h1>
        <p className="mt-5 max-w-prose text-[16.5px] leading-[1.7] text-muted">
          Nothing here yet.
        </p>
      </main>
      <Footer />
    </>
  );
}

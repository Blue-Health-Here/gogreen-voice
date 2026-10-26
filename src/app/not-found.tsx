import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container py-32 text-center">
      <p className="font-display text-8xl text-leaf">404</p>
      <h1 className="mt-4 text-3xl font-medium">This line has been disconnected.</h1>
      <Link href="/" className="btn-dark mt-8">Back home</Link>
    </section>
  );
}

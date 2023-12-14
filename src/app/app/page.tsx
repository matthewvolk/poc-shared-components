import Link from "next/link";

export default function AppRouter() {
  return (
    <main className="container mx-auto p-6 flex space-x-4">
      <h1>App Router</h1>
      <Link href="/">Back</Link>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-6 flex space-x-4">
      <Link href="/app">App Router</Link>
      <Link href="/pages">Pages Router</Link>
    </main>
  );
}

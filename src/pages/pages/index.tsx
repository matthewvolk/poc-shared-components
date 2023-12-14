import Link from "next/link";
import "@/styles/globals.css";

export default function PagesRouter() {
  return (
    <main className="container mx-auto p-6 flex space-x-4">
      <h1>Pages Router</h1>
      <Link href="/">Back</Link>
    </main>
  );
}

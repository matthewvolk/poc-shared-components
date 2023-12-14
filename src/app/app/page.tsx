import { NavigationRSC } from "@/components/navigation";
import Link from "next/link";
import * as client from "@/client";

const transformLinks = async () => {
  const raw = await client.getLinks();

  return raw.map((link) => ({ href: link.href, label: link.name }));
};

export default function AppRouter() {
  return (
    <main className="container mx-auto p-6">
      <div className="mb-12 flex space-x-4">
        <h1>App Router</h1>
        <Link href="/">Back</Link>
      </div>

      <NavigationRSC links={transformLinks()} />
    </main>
  );
}

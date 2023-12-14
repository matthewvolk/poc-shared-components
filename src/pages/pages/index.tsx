import Link from "next/link";
import * as client from "@/client";
import "@/styles/globals.css";
import { Navigation } from "@/components/navigation";

export async function getStaticProps() {
  return {
    props: {
      links: (await client.getLinks()).map((link) => ({
        label: link.name,
        href: link.href,
      })),
    },
  };
}

export default function PagesRouter({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <main className="container mx-auto p-6">
      <div className="mb-12 flex space-x-4">
        <h1>Pages Router</h1>
        <Link href="/">Back</Link>
      </div>

      <Navigation links={links} />
    </main>
  );
}

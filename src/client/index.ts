const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

export const getLinks = async () =>
  new Promise<typeof links>((resolve) =>
    setTimeout(() => resolve(links), 2000),
  );

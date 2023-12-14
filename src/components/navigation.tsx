import { ReactNode, Suspense, use } from "react";

type Links = Array<{
  href: string;
  label: string;
}>;

type NavigationProps = {
  links: Links;
};

export function Navigation({ links }: NavigationProps) {
  return <NavigationInner links={<NavigationLinks links={links} />} />;
}

type NavigationRSCProps = {
  links: Links | Promise<Links>;
  linksFallback?: ReactNode;
};

export function NavigationRSC({
  links,
  linksFallback = "Loading...",
}: NavigationRSCProps) {
  return (
    <NavigationInner
      links={
        <Suspense fallback={linksFallback}>
          <NavigationLinksRSC links={links} />
        </Suspense>
      }
    />
  );
}

type NavigationInnerProps = {
  links: ReactNode;
};

function NavigationInner({ links }: NavigationInnerProps) {
  return (
    <nav className="flex w-full justify-between gap-2">
      <h1>Logo</h1>

      {links}
    </nav>
  );
}

type NavigationLinksRSCProps = {
  links: Links | Promise<Links>;
};

function NavigationLinksRSC({ links }: NavigationLinksRSCProps) {
  return <NavigationLinks links={use(Promise.resolve(links))} />;
}

type NavigationLinksProps = {
  links: Links;
};

function NavigationLinks({ links }: NavigationLinksProps) {
  return (
    <ul className="flex gap-2">
      {links.map(({ href, label }) => (
        <li key={href}>{label}</li>
      ))}
    </ul>
  );
}

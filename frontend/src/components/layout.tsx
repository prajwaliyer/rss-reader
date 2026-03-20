import { useLocation } from "react-router-dom";
import { NavBar } from "./nav-bar";
import { FeedPage } from "@/pages/feed";
import { SourcesPage } from "@/pages/sources";
import { StarredPage } from "@/pages/starred";

const pages = [
  { path: "/", element: <FeedPage /> },
  { path: "/sources", element: <SourcesPage /> },
  { path: "/starred", element: <StarredPage /> },
];

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      {pages.map(({ path, element }) => (
        <main
          key={path}
          className="mx-auto min-h-screen max-w-lg pb-20"
          style={{ display: pathname === path ? "block" : "none" }}
        >
          {element}
        </main>
      ))}
      <NavBar />
    </>
  );
}

import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
  title: string;
  children: ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      "text-sm font-medium transition",
      isActive ? "text-blue-600" : "text-zinc-600 hover:text-zinc-900",
    ].join(" ");

  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <header className="flex items-center gap-3">
        <h1 className="text-xl font-semibold tracking-tight text-amber-500">{title}</h1>

        <nav className="ml-auto flex items-center gap-4">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/user" className={navClass}>
            User
          </NavLink>
          <NavLink to="/auth" className={navClass}>
            Auth
          </NavLink>
        </nav>
      </header>

      <div className="my-4 h-px w-full bg-zinc-200" />

      <main className="space-y-4">{children}</main>

      <footer className="mt-8 text-xs text-zinc-500">
        <span>
          Built for Telegram WebApp ·{" "}
          <Link to="/" className="underline underline-offset-2 hover:text-zinc-700">
            back to home
          </Link>
        </span>
      </footer>
    </div>
  );
}

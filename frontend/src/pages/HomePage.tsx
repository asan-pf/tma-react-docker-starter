import type { FC } from "react";
import PageLayout from "../components/PageLayout";

export const HomePage: FC = () => {
  return (
    <PageLayout title="Home">
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-zinc-700">
          Welcome! Use the menu to navigate.
        </p>
      </div>
    </PageLayout>
  );
};
